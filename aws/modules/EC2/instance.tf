# find default vpc
data "aws_vpc" "default" {
  default = true
}

# find latest al2023 image thats arm64
data "aws_ami" "amazon_linux" {
  most_recent = true

  filter {
    name   = "name"
    values = ["al2023-ami-2023*arm64"]
  }

  filter {
    name   = "owner-id"
    values = ["137112412989"]
  }

  owners = ["137112412989"]
}

# create the instance
resource "aws_instance" "this" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = "t4g.small"
  vpc_security_group_ids = [aws_security_group.this.id]
  iam_instance_profile   = aws_iam_instance_profile.this.name
  user_data              = file("${path.module}/scripts/user_data.sh")
  tags                   = merge(var.tags, { "Name" : var.resource_prefix })
}

# associate elastic IP with this instance
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.this.id
  allocation_id = aws_eip.this.id
}

# output the elastic ip
output "instance_public_ip" {
  value       = aws_eip.this.public_ip
  description = "The public IP address of the EC2 instance"
}