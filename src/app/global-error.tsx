"use client";

import React from "react";
import { ErrorComponent } from "@components/errors/error-component";
import { useTranslations } from "next-intl";

export default function GlobalErrorPage({ error }: { error: Error & { digest?: string } }) {
  const t = useTranslations("common");

  return (
    <ErrorComponent
      title={t("errors.globalError.title")}
      subTitle={t("errors.globalError.subTitle")}
      description={t("errors.globalError.description")}
      error={error}
    />
  );
}
