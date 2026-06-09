"use client";

import { useRecentNamespaces } from "@/lib/hooks/use-recent-namespaces";
import { ItemCard, ItemCardGroup, PressableFeedback } from "@heroui-pro/react";
import { Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Link from "next/link";

export function RecentNamespacesList({
  separator,
}: {
  separator?: React.ReactNode;
}) {
  const { namespaces, remove } = useRecentNamespaces();

  if (namespaces.length === 0) return null;

  return (
    <>
      {separator}
      <ItemCardGroup className="overflow-hidden" variant="secondary">
        {namespaces.map((n, idx) => (
          <Fragment key={idx}>
            {idx > 0 && <Separator />}
            <ItemCard<"a">
              className="hover:bg-default/20 active:bg-default-hover/50 relative w-full cursor-pointer overflow-hidden transition-colors"
              render={(props) => (
                <Link href={`/${n.namespace}/dashboard`} {...props} />
              )}
            >
              <PressableFeedback.Ripple />
              <ItemCard.Icon>
                <Icon icon={"gravity-ui:circle-link"} />
              </ItemCard.Icon>
              <ItemCard.Content>
                <ItemCard.Title>{n.namespace}</ItemCard.Title>
                <ItemCard.Description>{n.endpoint}</ItemCard.Description>
              </ItemCard.Content>
              <ItemCard.Action>
                <Icon
                  icon={"gravity-ui:chevron-right"}
                  className="text-muted"
                />
              </ItemCard.Action>
            </ItemCard>
          </Fragment>
        ))}
      </ItemCardGroup>
    </>
  );
}
