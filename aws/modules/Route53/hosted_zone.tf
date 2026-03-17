data "aws_route53_zone" "this" {
  name = "melissastan.com"
}

output "test" {
  value = data.aws_route53_zone.this.name
}