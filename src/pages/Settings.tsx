import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, User, Sun, Loader2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

export default function Settings() {
  const [profile, setProfile] = React.useState({
    name: "Berkay Ozgun",
    username: "@berkay",
    email: "berkay@example.com"
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const [notifications, setNotifications] = React.useState({
    communication: true,
    marketing: false,
    darkMode: false,
  });

  const handleProfileSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Profile updated successfully!", {
        description: "Your changes have been saved to our database.",
      });
    }, 1000);
  };

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => {
      const newState = { ...prev, [key]: !prev[key] };
      toast.info("Preferences saved", {
        description: `${key === 'darkMode' ? 'Theme' : 'Notification'} settings updated.`
      });
      return newState;
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Tabs defaultValue="profile" className="w-[800px]">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" /> Profile</TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2"><Sun className="h-4 w-4" /> Appearance</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4" /> Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium leading-none">Name</label>
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium leading-none">Username</label>
                <Input
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium leading-none">Email</label>
                <Input
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleProfileSave} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Saving..." : "Save changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of the application. Automatically switch between day and night themes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className={`h-24 w-40 rounded-lg p-2 shadow-sm ring-1 transition-all ${notifications.darkMode ? 'bg-slate-950 ring-slate-950' : 'bg-slate-100 ring-slate-200'}`}>
                  <div className={`h-2 w-20 rounded-lg ${notifications.darkMode ? 'bg-slate-800' : 'bg-slate-400'}`} />
                  <div className={`mt-2 h-2 w-[100px] rounded-lg ${notifications.darkMode ? 'bg-slate-800' : 'bg-slate-400'}`} />
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Dark Mode</label>
                    <p className="text-sm text-muted-foreground">Toggle dark mode on or off.</p>
                  </div>
                  <Switch
                    checked={notifications.darkMode}
                    onCheckedChange={() => handleToggle('darkMode')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label className="text-base font-medium">Communication Emails</label>
                  <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                </div>
                <Switch
                  checked={notifications.communication}
                  onCheckedChange={() => handleToggle('communication')}
                />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label className="text-base font-medium">Marketing Emails</label>
                  <p className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
                </div>
                <Switch
                  checked={notifications.marketing}
                  onCheckedChange={() => handleToggle('marketing')}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
