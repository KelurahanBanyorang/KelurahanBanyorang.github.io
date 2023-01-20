import React from "react";
import { Tooltip } from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";

export interface IStaticTooltip {
  children: any;
  label: string;
  maxWidth?: number;
  position?: FloatingPosition;
}

export const StaticTooltip: React.FC<IStaticTooltip> = ({
  children,
  label,
  maxWidth = "280",
  position = "bottom-end"
}) => {
  return (
    <Tooltip
      label={label}
      withArrow
      color={"rgba(255, 255, 255, 0.9)"}
      position={position}
      multiline
      // width={280}
      radius={"sm"}
      openDelay={795}
      styles={{
        tooltip: {
          color: "#334155",
          // border: `1px solid #94a3b8`,
          padding: "2px 8px",
          // textAlign: "justify",
          letterSpacing: "0.015em",
          maxWidth: maxWidth,
          fontSize: "11px"
        },
        arrow: {
          border: `1px solid #94a3b8`
        }
      }}
    >
      {children}
    </Tooltip>
  );
};

export interface IFloatingTooltip {
  children: any;
  label: string;
  maxWidth?: number;
}

export const FloatingTooltip: React.FC<IFloatingTooltip> = ({
  children,
  label,
  maxWidth = "280"
}) => {
  return (
    <Tooltip.Floating
      label={label}
      color={"rgba(255, 255, 255, 0.9)"}
      multiline
      // width={280}
      radius={"sm"}
      styles={{
        tooltip: {
          color: "#334155",
          // border: `1px solid #94a3b8`,
          padding: "2px 8px",
          // textAlign: "justify",
          letterSpacing: "0.015em",
          maxWidth: maxWidth,
          fontSize: "11px"
        },
        arrow: {
          border: `1px solid #94a3b8`
        }
      }}
    >
      {children}
    </Tooltip.Floating>
  );
};
