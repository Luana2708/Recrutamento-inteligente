import { useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export function NotificationSystem() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("Bem-vindo ao SmartHire AI!", {
        description: "Explore nossa plataforma de recrutamento inteligente",
        duration: 4000,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <Toaster position="top-right" richColors />;
}
