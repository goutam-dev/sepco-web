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
const HoverLabel = ({ text, styles }) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      style={
        styles
          ? {
              ...{
                display: "inline-block",
                transition: "transform 0.3s, color 0.3s",
                transform: hover ? "translateY(-2px)" : "translateY(0)",
                color: hover ? "#FFD700" : "black", // golden on hover
                cursor: "pointer",
              },
            }
          : {
              display: "inline-block",
              transition: "transform 0.3s, color 0.3s",
              transform: hover ? "translateY(-2px)" : "translateY(0)",
              color: hover ? "#FFD700" : "white", // golden on hover
              cursor: "pointer",
            }
      }
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
        label: <HoverLabel text="Board of Directors" styles="a" />,
      },
      {
        key: "senior-management",
        label: <HoverLabel text="Senior Management" styles="a" />,
      },
      {
        key: "area-of-responsibility",
        label: <HoverLabel text="Area of Responsibility" styles="a" />,
      },
      {
        key: "key-statistics",
        label: <HoverLabel text="Key Statistics" styles="a" />,
      },
      { key: "maps", label: <HoverLabel text="Maps" styles="a" /> },
      { key: "organogram", label: <HoverLabel text="Organogram" styles="a" /> },
      { key: "customers", label: <HoverLabel text="Customers" styles="a" /> },
      { key: "what-we-do", label: <HoverLabel text="What We Do" styles="a" /> },
      {
        key: "the-ministry",
        label: <HoverLabel text="The Ministry" styles="a" />,
      },
      {
        key: "vision-mission-values",
        label: <HoverLabel text="Vision Mission And Values" styles="a" />,
      },
      {
        key: "image-gallery",
        label: <HoverLabel text="Image Gallery" styles="a" />,
      },
    ],
  },
  {
    key: "services",
    label: <HoverLabel text="Services" />,
    children: [
      {
        key: "load-management-schedule",
        label: <HoverLabel text="Load Management Schedule" styles="a" />,
      },
      {
        key: "tariff-wise-billing",
        label: <HoverLabel text="Tariff-Wise Billing/Collection" styles="a" />,
      },
      {
        key: "daily-monthly-quarterly-reports",
        label: (
          <HoverLabel text="Daily, Monthly And Quarterly Reports" styles="a" />
        ),
      },
      {
        key: "tariff-guide",
        label: <HoverLabel text="Tariff Guide" styles="a" />,
      },
      {
        key: "complaint-management-cell",
        label: <HoverLabel text="Complaint Management Cell" styles="a" />,
      },
      {
        key: "bill-estimator",
        label: <HoverLabel text="Bill Estimator" styles="a" />,
      },
      {
        key: "duplicate-bill",
        label: <HoverLabel text="Duplicate Bill" styles="a" />,
      },
      {
        key: "new-connection-cost-calculator",
        label: <HoverLabel text="New Connection Cost Calculator" styles="a" />,
      },
      {
        key: "new-connection-application",
        label: <HoverLabel text="New Connection Application" styles="a" />,
      },
    ],
  },
  {
    key: "downloads",
    label: <HoverLabel text="Downloads" />,
    children: [
      {
        key: "load-shedding-schedule",
        label: <HoverLabel text="Load Shedding Schedule" styles="a" />,
      },
      {
        key: "tariff-guide-download",
        label: <HoverLabel text="Tariff Guide" styles="a" />,
      },
      {
        key: "orders-notifications",
        label: <HoverLabel text="Orders & Notifications" styles="a" />,
      },
      { key: "others", label: <HoverLabel text="Others" styles="a" /> },
      {
        key: "seniority-lists",
        label: <HoverLabel text="Seniority Lists" styles="a" />,
      },
      {
        key: "pocket-book-usaid",
        label: (
          <HoverLabel
            text="Pocket Book USAID For Power Distribution System"
            styles="a"
          />
        ),
      },
    ],
  },
  {
    key: "additional",
    label: <HoverLabel text="Additional" />,
    children: [
      { key: "ami", label: <HoverLabel text="AMI" styles="a" /> },
      { key: "mirad", label: <HoverLabel text="MIRAD" styles="a" /> },
      {
        key: "erp-user-manuals",
        label: <HoverLabel text="ERP (User Manuals)" styles="a" />,
      },
      {
        key: "net-metering",
        label: <HoverLabel text="NET Metering" styles="a" />,
      },
      {
        key: "tax-deduction-certificate",
        label: <HoverLabel text="Tax Deduction Certificate" styles="a" />,
      },
      {
        key: "consumer-cnic-registration",
        label: <HoverLabel text="Consumer CNIC Registration" styles="a" />,
      },
      {
        key: "consumer-mobile-number-registration",
        label: (
          <HoverLabel text="Consumer Mobile Number Registration" styles="a" />
        ),
      },
    ],
  },
  { key: "tenders", label: <HoverLabel text="Tenders" /> },
  { key: "careers", label: <HoverLabel text="Careers" /> },
];

const HeaderComponent = ({ logoLeft, title, logoRight }) => {
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
    background: "#0f224a", // navy blue
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "padding 0.3s, box-shadow 0.3s",
    height: "fit-content"
  };

  const titleStyle = {
    margin: 0,
    whiteSpace: isMobile ? "normal" : "nowrap",
    flexShrink: 0,
    lineHeight: isMobile ? "1.2" : "inherit",
    color: "#0f5078",
    transition: "transform 0.3s",
  };

  // Logo hover effect state
  const [hoverTitle, setHoverTitle] = useState(false);

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
      {logoLeft && (
        <img
          src={logoLeft}
          alt="Sepco Logo"
          style={{
            ...logoStyleBase,
            height: "70px",
          }}
        />
      )}
      <Title>
        <img
          src={title}
          alt="Title"
          style={{
            ...titleStyle,
            height: "70px",
            transform: hoverTitle ? "scale(1.1)" : "scale(1)",
            boxShadow: hoverTitle ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
            borderRadius: "0", // No outline or border radius
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoverTitle(true)}
          onMouseLeave={() => setHoverTitle(false)}
        />
      </Title>

      {/* Right logo without hover effect */}
      {!isMobile && logoRight && (
        <img
          src={logoRight}
          alt="Logo Right"
          style={{
            ...logoStyleBase,
            borderRadius: "50%",
          }}
        />
      )}

      {!isMobile && (
        <Menu
          mode="horizontal"
          items={createMenuItems()}
          style={menuStyle}
          rootClassName="custom-menu"
        />
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <MenuOutlined
          onClick={showDrawer}
          style={{
            fontSize: 24,
            color: "#fff",
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
      >
        <Menu
          mode="inline"
          items={createMenuItems()}
          style={{
            borderRight: "none",
            fontFamily: "Roboto, sans-serif",
            fontSize: menuFontSize,
            backgroundColor: 'rgb(15, 80, 120)'
          }}
          onClick={closeDrawer}
        />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
