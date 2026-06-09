"use client";

import { Sidebar } from "@heroui-pro/react";
import { navItems } from "./nav-items";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useDashboard } from "@/app/[namespace]/dashboard/context";
import { usePathname } from "next/navigation";
import { logout } from "@/components/auth/logout";

export default function AppSidebar() {
  const { environment } = useDashboard();
  const pathname = usePathname();
  const base = `/${environment.namespace}/dashboard`;
  const isActive = (slug: string) =>
    slug === ""
      ? pathname === base
      : pathname === `${base}/${slug}` ||
        pathname.startsWith(`${base}/${slug}/`);

  return (
    <>
      <Sidebar>
        <Sidebar.Header>
          <div className="flex items-center gap-3 px-1 py-2">
            <div className="bg-accent flex size-6 shrink-0 items-center justify-center rounded-md">
              <Icon icon={"gravity-ui:cloud-nut-hex"} className="text-white" />
            </div>
            <span
              className="text-foreground text-sm font-semibold"
              data-sidebar="label"
            >
              EVA PIM
            </span>
          </div>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.Menu
              aria-label="Navigation"
              defaultExpandedKeys={["Analytics"]}
            >
              {navItems.map((item) => (
                <Sidebar.MenuItem
                  key={item.label}
                  href={
                    item.items
                      ? undefined
                      : `/${environment.namespace}/dashboard/${item.slug}`
                  }
                  id={item.label}
                  isCurrent={isActive(item.slug)}
                  textValue={item.label}
                >
                  <Sidebar.MenuIcon>
                    <Icon icon={item.icon} className="size-4" />
                  </Sidebar.MenuIcon>
                  <Sidebar.MenuLabel>
                    {item.label}
                    {item.items ? (
                      <Sidebar.MenuTrigger>
                        <Sidebar.MenuIndicator />
                      </Sidebar.MenuTrigger>
                    ) : null}
                  </Sidebar.MenuLabel>
                  {item.badge ? (
                    <Sidebar.MenuChip>
                      <Chip color="success" size="sm" variant="soft">
                        {item.badge}
                      </Chip>
                    </Sidebar.MenuChip>
                  ) : null}
                  {item.items ? (
                    <Sidebar.Submenu>
                      {item.items.map((subitem) => (
                        <Sidebar.MenuItem
                          key={subitem.slug}
                          href="#"
                          id={`${item.label}-${subitem}`}
                          textValue={subitem.label}
                        >
                          <Sidebar.MenuLabel>{subitem.label}</Sidebar.MenuLabel>
                        </Sidebar.MenuItem>
                      ))}
                    </Sidebar.Submenu>
                  ) : null}
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Sidebar.Menu aria-label="Footer actions">
            <Sidebar.MenuItem href="#" id="help" textValue="Help & Information">
              <Sidebar.MenuIcon>
                <Icon icon={"gravity-ui:circle-question"} className="size-4" />
              </Sidebar.MenuIcon>
              <Sidebar.MenuLabel>Help & Information</Sidebar.MenuLabel>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem
              textValue="Log out"
              onAction={() => logout(environment.namespace)}
            >
              <Sidebar.MenuIcon>
                <Icon
                  icon={"gravity-ui:arrow-right-from-square"}
                  className="size-4"
                />
              </Sidebar.MenuIcon>
              <Sidebar.MenuLabel>Log out</Sidebar.MenuLabel>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Mobile>
        <Sidebar.Header>
          <div className="flex items-center gap-3 px-1 py-2">
            <div className="bg-accent flex size-6 shrink-0 items-center justify-center rounded-md">
              <Icon icon={"gravity-ui:cloud-nut-hex"} className="text-white" />
            </div>
            <span
              className="text-foreground text-sm font-semibold"
              data-sidebar="label"
            >
              EVA PIM
            </span>
          </div>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.Menu
              aria-label="Navigation"
              defaultExpandedKeys={["Analytics"]}
            >
              {navItems.map((item) => (
                <Sidebar.MenuItem
                  key={item.label}
                  href={item.items ? undefined : "#"}
                  id={item.label}
                  textValue={item.label}
                >
                  <Sidebar.MenuIcon>
                    <Icon icon={item.icon} className="size-4" />
                  </Sidebar.MenuIcon>
                  <Sidebar.MenuLabel>
                    {item.label}
                    {item.items ? (
                      <Sidebar.MenuTrigger>
                        <Sidebar.MenuIndicator />
                      </Sidebar.MenuTrigger>
                    ) : null}
                  </Sidebar.MenuLabel>
                  {item.badge ? (
                    <Sidebar.MenuChip>
                      <Chip color="success" size="sm" variant="soft">
                        {item.badge}
                      </Chip>
                    </Sidebar.MenuChip>
                  ) : null}
                  {item.items ? (
                    <Sidebar.Submenu>
                      {item.items.map((subitem) => (
                        <Sidebar.MenuItem
                          key={subitem.slug}
                          href="#"
                          id={`${item.label}-${subitem}`}
                          textValue={subitem.label}
                        >
                          <Sidebar.MenuLabel>{subitem.label}</Sidebar.MenuLabel>
                        </Sidebar.MenuItem>
                      ))}
                    </Sidebar.Submenu>
                  ) : null}
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar.Mobile>
    </>
  );
}
