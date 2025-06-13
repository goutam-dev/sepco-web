import React from "react";
import { Layout, Row, Col, Typography, Grid, Space, Divider } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Link, Text } = Typography;
const { useBreakpoint } = Grid;

const FooterComponent = () => {
  const screens = useBreakpoint();
  const isXs = screens.xs;
  const isSm = screens.sm && !screens.md;

  // Compact responsive typography
  const titleFontSize = isXs ? 16 : 18;
  const linkFontSize = isXs ? 13 : 14;
  const socialIconSize = isXs ? 20 : 22;
  const paddingVertical = isXs ? 24 : 32;

  // Organized footer links
  const quickLinks = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About", href: "/about" },
    { key: "contact", label: "Contact", href: "/contact" },
    { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  ];

  const servicesLinks = [
    { key: "payroll", label: "Payroll", href: "/payroll" },
    { key: "directory", label: "Directory", href: "/directory" },
    { key: "templates", label: "Forms", href: "/templates" },
    { key: "policies", label: "Policies", href: "/policies" },
  ];

  const resourceLinks = [
    { key: "mis", label: "MIS Portal", href: "https://mis.sepco.com" },
    { key: "webmail", label: "Webmail", href: "https://webmail.sepco.com" },
    { key: "legislation", label: "Legal", href: "/legislation" },
    { key: "sitemap", label: "Sitemap", href: "/sitemap.xml" },
  ];

  // Contact info
  const contactInfo = [
    { icon: <EnvironmentOutlined />, text: "Sukkur, Sindh, Pakistan" },
    { icon: <PhoneOutlined />, text: "+92-71-123-4567" },
    { icon: <MailOutlined />, text: "info@sepco.com.pk" },
  ];

  // Social links
  const socialLinks = [
    {
      key: "facebook",
      icon: <FacebookFilled />,
      href: "https://www.facebook.com/sepco",
      color: "#1877f2",
    },
    {
      key: "twitter",
      icon: <TwitterOutlined />,
      href: "https://twitter.com/sepco",
      color: "#1da1f2",
    },
    {
      key: "linkedin",
      icon: <LinkedinOutlined />,
      href: "https://www.linkedin.com/company/sepco",
      color: "#0077b5",
    },
  ];

  // Compact styles
  const titleStyle = {
    fontSize: titleFontSize,
    color: "#ffffff",
    marginBottom: 12,
    fontWeight: 600,
  };

  const linkStyle = {
    display: "block",
    fontSize: linkFontSize,
    color: "#b8c5d1",
    marginBottom: 6,
    transition: "all 0.3s ease",
    lineHeight: 1.5,
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    fontSize: linkFontSize,
    color: "#e2e8f0",
  };

  return (
    <Footer
      style={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
        padding: `${paddingVertical}px 0 20px 0`,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Main Content */}
        <Row gutter={[24, 24]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={6}>
            <Typography.Title
              level={4}
              style={{ ...titleStyle, color: "#667eea", marginBottom: 8 }}
            >
              SEPCO
            </Typography.Title>
            <div style={{ marginBottom: 16 }}>
              {contactInfo.map((item, index) => (
                <div key={index} style={contactItemStyle}>
                  <span
                    style={{ marginRight: 8, color: "#667eea", fontSize: 12 }}
                  >
                    {item.icon}
                  </span>
                  <span style={{ fontSize: 12 }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <Space size="middle">
              {socialLinks.map((social) => (
                <Link
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  style={{
                    color: "#8c8c8c",
                    fontSize: socialIconSize,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8c8c8c";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Space>
          </Col>

          {/* Quick Links */}
          <Col xs={12} sm={6} md={4}>
            <Typography.Title level={5} style={titleStyle}>
              Quick Links
            </Typography.Title>
            {quickLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#667eea";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#b8c5d1";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {link.label}
              </Link>
            ))}
          </Col>

          {/* Services */}
          <Col xs={12} sm={6} md={4}>
            <Typography.Title level={5} style={titleStyle}>
              Services
            </Typography.Title>
            {servicesLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#667eea";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#b8c5d1";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {link.label}
              </Link>
            ))}
          </Col>

          {/* Resources */}
          <Col xs={12} sm={6} md={4}>
            <Typography.Title level={5} style={titleStyle}>
              Resources
            </Typography.Title>
            {resourceLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#667eea";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#b8c5d1";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {link.label}
              </Link>
            ))}
          </Col>

          {/* Map */}
          <Col xs={24} sm={12} md={6}>
            <Typography.Title level={5} style={titleStyle}>
              Location
            </Typography.Title>
            <div
              style={{
                width: "100%",
                height: isXs ? 120 : 140,
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <iframe
                title="SEPCO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.508161372192!2d68.88456437370807!3d27.701592425748483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d575f18f563d%3A0x9facd77063461d95!2sSEPCO%2C%20Regional%20Headquarters!5e0!3m2!1sen!2s!4v1749630789734!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Divider
          style={{
            margin: "20px 0 12px 0",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Row justify="space-between" align="middle" gutter={[16, 8]}>
          <Col xs={24} sm={12}>
            <Text
              style={{
                fontSize: 12,
                color: "#64748b",
                textAlign: isXs ? "center" : "left",
                display: "block",
              }}
            >
              © 2025 SEPCO. All rights reserved.
            </Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text
              style={{
                fontSize: 12,
                color: "#64748b",
                textAlign: isXs ? "center" : "right",
                display: "block",
              }}
            >
              Designed by{" "}
              <Link href="#" style={{ color: "#667eea", fontWeight: 500 }}>
                PITC
              </Link>
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
