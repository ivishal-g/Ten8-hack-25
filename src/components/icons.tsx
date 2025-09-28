// src/components/icons.tsx
import { ReactNode } from "react";
import { Share2, ExternalLink, Plus, Calendar, CheckSquare, MessageSquare, Bell, User, QrCode } from "lucide-react";

export const Icons = {
  share: (props: any) => <Share2 {...props} />,
  externalLink: (props: any) => <ExternalLink {...props} />,
  plus: (props: any) => <Plus {...props} />,
  calendar: (props: any) => <Calendar {...props} />,
  checkSquare: (props: any) => <CheckSquare {...props} />,
  message: (props: any) => <MessageSquare {...props} />,
  bell: (props: any) => <Bell {...props} />,
  user: (props: any) => <User {...props} />,
  qr: (props: any) => <QrCode {...props} />
};