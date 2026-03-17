resource "aws_route53_record" "this" {
  name    = var.route53_record_name
  type    = "A"
  zone_id = data.aws_route53_zone.this.id
  records = var.route53_records
  ttl     = 300
}