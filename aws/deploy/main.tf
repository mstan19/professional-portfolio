module "ec2" {
  source          = "../modules/EC2"
  resource_prefix = "mstan-pp"
  tags = {}
}

module "route53" {
  source              = "../modules/Route53"
  route53_record_name = ""
  route53_records     = [module.ec2.instance_public_ip]
}