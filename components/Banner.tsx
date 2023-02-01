"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "./ChildComponents/Breadcrumb";
import BreadcrumbItem from "./ChildComponents/BreadcrumbItem";

interface Breadcrumbs {
  href: string;
  label: string;
  isCurrent: boolean;
}

export default function Banner() {
  const router = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumbs[]>();

  useEffect(() => {
    let pathArray = router?.split("/");
    pathArray?.shift();

    pathArray = pathArray?.filter((path) => path !== "" && path !== "post");

    const breadcrumbs = pathArray?.map((path, index) => {
      const href = "/" + pathArray?.slice(0, index + 1).join("/");

      return {
        href: "/post" + href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray?.length! - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router]);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold pl-10 py-5">
      <div>
        <h1 className="text-3xl">Our Daily Blog</h1>

        <Breadcrumb>
          <BreadcrumbItem isCurrent={router === "/"} href="/">
            Home
          </BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem
                key={breadcrumb.href}
                href={breadcrumb.href}
                isCurrent={breadcrumb.isCurrent}
              >
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </div>
    </div>
  );
}
