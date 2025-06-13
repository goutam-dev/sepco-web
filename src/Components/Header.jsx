import React, { useState } from "react";
import { Layout, Menu, Drawer, Typography, Grid, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

// Note: Include a custom font in your index.html or global CSS, e.g.:
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
// and set body or root font-family: 'Roboto', sans-serif;

const { Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

// HoverLabel component adds smooth hover animation and color transition
const HoverLabel = ({ text }) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      style={{
        display: "inline-block",
        transition: "transform 0.3s, color 0.3s",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        color: hover ? "#FFD700" : "inherit", // golden on hover
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </span>
  );
};

// Function to create menu items with HoverLabel
const createMenuItems = () => [
  { key: "home", label: <HoverLabel text="Home" /> },
  {
    key: "organization",
    label: <HoverLabel text="Organization" />,
    children: [
      {
        key: "board-of-directors",
        label: <HoverLabel text="Board of Directors" />,
      },
      {
        key: "senior-management",
        label: <HoverLabel text="Senior Management" />,
      },
      {
        key: "area-of-responsibility",
        label: <HoverLabel text="Area of Responsibility" />,
      },
      { key: "key-statistics", label: <HoverLabel text="Key Statistics" /> },
      { key: "maps", label: <HoverLabel text="Maps" /> },
      { key: "organogram", label: <HoverLabel text="Organogram" /> },
      { key: "customers", label: <HoverLabel text="Customers" /> },
      { key: "what-we-do", label: <HoverLabel text="What We Do" /> },
      { key: "the-ministry", label: <HoverLabel text="The Ministry" /> },
      {
        key: "vision-mission-values",
        label: <HoverLabel text="Vision Mission And Values" />,
      },
      { key: "image-gallery", label: <HoverLabel text="Image Gallery" /> },
    ],
  },
  {
    key: "services",
    label: <HoverLabel text="Services" />,
    children: [
      {
        key: "load-management-schedule",
        label: <HoverLabel text="Load Management Schedule" />,
      },
      {
        key: "tariff-wise-billing",
        label: <HoverLabel text="Tariff-Wise Billing/Collection" />,
      },
      {
        key: "daily-monthly-quarterly-reports",
        label: <HoverLabel text="Daily, Monthly And Quarterly Reports" />,
      },
      { key: "tariff-guide", label: <HoverLabel text="Tariff Guide" /> },
      {
        key: "complaint-management-cell",
        label: <HoverLabel text="Complaint Management Cell" />,
      },
      { key: "bill-estimator", label: <HoverLabel text="Bill Estimator" /> },
      { key: "duplicate-bill", label: <HoverLabel text="Duplicate Bill" /> },
      {
        key: "new-connection-cost-calculator",
        label: <HoverLabel text="New Connection Cost Calculator" />,
      },
      {
        key: "new-connection-application",
        label: <HoverLabel text="New Connection Application" />,
      },
    ],
  },
  {
    key: "downloads",
    label: <HoverLabel text="Downloads" />,
    children: [
      {
        key: "load-shedding-schedule",
        label: <HoverLabel text="Load Shedding Schedule" />,
      },
      {
        key: "tariff-guide-download",
        label: <HoverLabel text="Tariff Guide" />,
      },
      {
        key: "orders-notifications",
        label: <HoverLabel text="Orders & Notifications" />,
      },
      { key: "others", label: <HoverLabel text="Others" /> },
      { key: "seniority-lists", label: <HoverLabel text="Seniority Lists" /> },
      {
        key: "pocket-book-usaid",
        label: (
          <HoverLabel text="Pocket Book USAID For Power Distribution System" />
        ),
      },
    ],
  },
  {
    key: "additional",
    label: <HoverLabel text="Additional" />,
    children: [
      { key: "ami", label: <HoverLabel text="AMI" /> },
      { key: "mirad", label: <HoverLabel text="MIRAD" /> },
      {
        key: "erp-user-manuals",
        label: <HoverLabel text="ERP (User Manuals)" />,
      },
      { key: "net-metering", label: <HoverLabel text="NET Metering" /> },
      {
        key: "tax-deduction-certificate",
        label: <HoverLabel text="Tax Deduction Certificate" />,
      },
      {
        key: "consumer-cnic-registration",
        label: <HoverLabel text="Consumer CNIC Registration" />,
      },
      {
        key: "consumer-mobile-number-registration",
        label: <HoverLabel text="Consumer Mobile Number Registration" />,
      },
    ],
  },
  { key: "tenders", label: <HoverLabel text="Tenders" /> },
  { key: "careers", label: <HoverLabel text="Careers" /> },
];

const HeaderComponent = ({ logoLeft, logoRight }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  // Dynamic font sizes
  const titleFontSize = screens.xs ? 14 : screens.sm ? 20 : 24;
  const menuFontSize = screens.xs ? 12 : screens.sm ? 14 : 16;
  const logoHeight = screens.xs ? 27 : 40;

  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "padding 0.3s, box-shadow 0.3s",
  };

  const titleStyle = {
    margin: 0,
    whiteSpace: isMobile ? "normal" : "nowrap",
    flexShrink: 0,
    lineHeight: isMobile ? "1.2" : "inherit",
    color: "#0f5078",
    fontFamily: "Roboto, sans-serif",
    fontSize: titleFontSize,
    fontWeight: 500,
    transition: "transform 0.3s",
  };

  // Logo hover effect state
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const logoStyleBase = {
    height: logoHeight,
    margin: "0 12px",
    objectFit: "contain",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  // Menu styles for hover box-shadow
  const menuStyle = {
    borderBottom: "none",
    flex: 1,
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: menuFontSize,
    background: "transparent",
  };

  return (
    <Header style={headerStyle}>
      {/* Left logo with hover effect */}
      {logoLeft && (
        <img
          src={logoLeft}
          alt="Logo Left"
          style={{
            ...logoStyleBase,
            transform: hoverLeft ? "scale(1.1)" : "scale(1)",
            boxShadow: hoverLeft ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
            minHeight: "27px",
          }}
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
        />
      )}

      {/* Heading with subtle hover lift */}
      <Title
        level={1}
        style={titleStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-2px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        Sukkur Electric Power Company
      </Title>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Desktop Menu */}
      {!isMobile && (
        <Menu
          mode="horizontal"
          items={createMenuItems()}
          style={menuStyle}
          rootClassName="custom-menu"
        />
      )}

      {/* Right logo with hover effect */}
      {!isMobile && logoRight && (
        <img
          src={logoRight}
          alt="Logo Right"
          style={{
            ...logoStyleBase,
            transform: hoverRight ? "scale(1.1)" : "scale(1)",
            boxShadow: hoverRight ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
            backgroundColor: "green",
            borderRadius: "50%",
          }}
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
        />
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <MenuOutlined
          onClick={showDrawer}
          style={{
            fontSize: 24,
            color: "#0f5078",
            marginLeft: 12,
            transition: "color 0.3s",
          }}
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title={
          <Space align="center" style={{ width: "100%" }}>
            {logoLeft && (
              <img src={logoLeft} alt="Logo" style={logoStyleBase} />
            )}
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Sukkur Electric Power Company
            </span>
            {logoRight && (
              <img
                src={logoRight}
                alt="Logo"
                style={{
                  ...logoStyleBase,
                  backgroundColor: "green",
                  borderRadius: "50%",
                }}
              />
            )}
          </Space>
        }
        placement="right"
        closable
        onClose={closeDrawer}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        style={{}}
      >
        <Menu
          mode="inline"
          items={createMenuItems()}
          style={{
            borderRight: "none",
            fontFamily: "Roboto, sans-serif",
            fontSize: menuFontSize,
          }}
          onClick={closeDrawer}
        />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
