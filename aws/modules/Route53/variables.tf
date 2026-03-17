variable "route53_record_name" {
  type = string
  description = "Name of the record to create"
}

variable "route53_records" {
  type = list
  description = "List of records the route53 record will point to"
}