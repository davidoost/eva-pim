"use client";

import { AppLayout, Navbar, Sidebar } from "@heroui-pro/react";
import {
  Avatar,
  Breadcrumbs,
  Button,
  Dropdown,
  Label,
  Separator,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useDashboard } from "@/app/[namespace]/dashboard/context";
import { usePathname } from "next/navigation";

export default function AppNavbar() {
  const { environment, currentNavItem } = useDashboard();
  const pathname = usePathname();
  const base = `/${environment.namespace}/dashboard`;
  const isNested =
    !!currentNavItem &&
    currentNavItem.slug !== "" &&
    pathname !== `${base}/${currentNavItem.slug}`;

  return (
    <Navbar maxWidth="full">
      <Navbar.Header>
        <AppLayout.MenuToggle />
        <Sidebar.Trigger />
        {/* {currentNavItem && (
          <Breadcrumbs className="min-w-0">
            {isNested ? (
              <>
                <Breadcrumbs.Item href={`${base}/${currentNavItem.slug}`}>
                  {currentNavItem.label}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{pathname.split("/").pop()}</Breadcrumbs.Item>
              </>
            ) : (
              <Breadcrumbs.Item>
                {currentNavItem.label}
              </Breadcrumbs.Item>
            )}
          </Breadcrumbs>
        )} */}
        <h1 className="text-xl font-semibold">{currentNavItem?.label}</h1>
        <Navbar.Spacer />
        <Navbar.Content>
          <Navbar.Item aria-label="Search">
            <Icon icon={"gravity-ui:magnifier"} className="size-4" />
          </Navbar.Item>
          <Navbar.Item aria-label="Notifications">
            <Icon icon={"gravity-ui:bell"} className="size-4" />
          </Navbar.Item>
          <Navbar.Separator />
          <Dropdown>
            <Button isIconOnly aria-label="Account menu" variant="ghost">
              <Avatar className="size-6" color="success" variant="soft">
                <Avatar.Fallback className="text-xs font-semibold">
                  JG
                </Avatar.Fallback>
              </Avatar>
            </Button>
            <Dropdown.Popover className="min-w-50" placement="bottom end">
              <Dropdown.Menu>
                <Dropdown.Item id="account" textValue="Account">
                  <Icon
                    icon={"gravity-ui:person"}
                    className="size-4 text-muted"
                  />
                  <Label>Account</Label>
                </Dropdown.Item>
                <Dropdown.Item id="settings" textValue="Settings">
                  <Icon
                    icon={"gravity-ui:gear"}
                    className="size-4 text-muted"
                  />
                  <Label>Settings</Label>
                </Dropdown.Item>
                <Separator />
                <Dropdown.Item id="sign-out" textValue="Log out">
                  <Icon
                    icon={"gravity-ui:arrow-right-from-square"}
                    className="size-4 text-muted"
                  />
                  <Label>Log out</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </Navbar.Content>
      </Navbar.Header>
    </Navbar>
  );
}
