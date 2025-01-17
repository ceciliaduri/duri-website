'use client';

import { useToast } from "@/hooks/use-toast";

export default function TestToast() {
  const { toast } = useToast();

  return (
    <button
      onClick={() =>
        toast({
          title: "Teste de Toast",
          description: "Este é um exemplo de notificação com ShadCN.",
        })
      }
      className="p-2 bg-blue-500 text-white rounded"
    >
      Disparar Toast
    </button>
  );
}
