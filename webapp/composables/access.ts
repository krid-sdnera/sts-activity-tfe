import { useStorage } from "@vueuse/core";

export function useAccess() {
  const accessCode = useStorage<string | null>("accessCode", null);
  const router = useRouter();

  return {
    accessCode,
    requireAccessCode() {
      if (accessCode.value === null) {
        router.push("/login");
      }
    },
  };
}
