'use client';

import { BellRing, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
// import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

// interface Notification {
//   id: number;
//   type: string;
//   createdAt: string;
//   updatedAt: string;
//   translations: {
//     id: number;
//     language: string;
//     title: string;
//     message: string;
//     notificationId: number;
//   }[];
// }

const Notifications = ({ locale }: { locale: string }) => {
  // const [notifications, setNotifications] = useState<Notification[] | null>(
  //   null,
  // );
  // const [error, setError] = useState(false);

  const getNotificationIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <BellRing className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationStyle = (type: string) => {
    switch (type.toLowerCase()) {
      case 'info':
        return 'border-blue-200 bg-blue-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     try {
  //       const res = await fetch(`/api/${params.locale}/getNotifications`);
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch notifications');
  //       }
  //       const data: Notification[] = await res.json();
  //       setNotifications(data);
  //     } catch (error: unknown) {
  //       setError(true);
  //       console.error(error);
  //     }
  //   };
  //   fetchNotifications();
  // }, [params.locale]);

  // if (error) {
  //   return (
  //     <Alert
  //       variant="destructive"
  //       className="max-w-md mx-auto mt-4 h-52 flex justify-center items-center text-center"
  //     >
  //       <div>
  //         <AlertTriangle className="h-8 w-8 mb-2 mx-auto" />
  //         <AlertTitle className="text-lg">Error</AlertTitle>
  //         <AlertDescription>Failed to load notifications</AlertDescription>
  //       </div>
  //     </Alert>
  //   );
  // }
  // //loading skeleton
  // if (!notifications) {
  //   return (
  //     <div className="max-w-2xl mx-auto p-4 space-y-4">
  //       {[...Array(4)].map((_, index) => (
  //         <div
  //           key={index}
  //           className="h-24 w-full rounded-md bg-white p-4 space-y-2"
  //         >
  //           <Skeleton className="h-3 w-3/4 rounded-md" />{' '}
  //           <Skeleton className="h-2 w-5/6 rounded-md" />{' '}
  //           <Skeleton className="h-2 w-1/2 rounded-md" />{' '}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // // Sort notifications by createdAt in descending order
  // const sortedNotifications = [...notifications].sort(
  //   (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  // );

  const { t } = useTranslation();

  const notifications = t('notifications', {
    returnObjects: true,
  }) as { title: string; message: string; type: string; date: string }[];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map((notification, index) => {
            // Check if notification.date exists, otherwise use current date
            const date = new Date(
              notification.date ? notification.date : Date.now(),
            );

            // Format for Singapore timezone
            const formattedDate = new Intl.DateTimeFormat('en-SG', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
              timeZone: 'Asia/Singapore',
            }).format(date);

            return (
              <Alert
                key={index}
                className={cn(
                  'transition-all duration-300 hover:shadow-md',
                  getNotificationStyle(notification.type),
                )}
              >
                <div className="flex items-start gap-3">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <AlertTitle className="font-semibold mb-1 lg:text-xl text-lg">
                      {notification.title}
                    </AlertTitle>
                    <AlertDescription className="text-base">
                      {notification.message}
                    </AlertDescription>
                    <div className="mt-2 text-xs text-gray-500">
                      {formattedDate}
                    </div>
                  </div>
                </div>
              </Alert>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500">No notifications available</p>
      )}
    </div>
  );
};

export default Notifications;
