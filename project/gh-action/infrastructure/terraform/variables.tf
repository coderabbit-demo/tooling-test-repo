variable "aws_region" {
  type        = string
  description = "AWS region to deploy resources"
  default     = "us-west-2"
}

variable "environment" {
  type        = string
  description = "Environment name"
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod"
  }
}

variable "vpc_cidr" {
  type        = string
  description = "CIDR block for VPC"
  validation {
    condition     = can(cidrhost(var.vpc_cidr, 0))
    error_message = "Must be valid CIDR notation"
  }
}

variable "private_subnets" {
  type        = list(string)
  description = "List of private subnet CIDR blocks"
}

variable "common_tags" {
  type        = map(string)
  description = "Common tags for all resources"
  default = {
    ManagedBy = "Terraform"
  }
}