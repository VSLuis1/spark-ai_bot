"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6cd78df2-b4fd-4b08-8ddc-294690568a76");
  }, []);

  return null;
};
