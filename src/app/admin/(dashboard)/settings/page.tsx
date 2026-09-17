import SettingsForm from "@/components/admin/SettingsForm";
import { getSettings } from "@/lib/settings";

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <SettingsForm settings={settings} />
  );
}