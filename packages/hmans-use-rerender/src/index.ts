import { useVersion } from "@hmans/use-version"

export const useRerender = () => {
  const [_, bump] = useVersion()
  return bump
}
