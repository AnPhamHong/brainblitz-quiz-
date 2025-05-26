import { CalendarDays, Menu, ToggleLeft } from 'lucide-react';

function UserLog() {
     const logs = [
        {
          icon: <ToggleLeft size={20} color="#fff" />,
          name: "Control Your Account",
          due: "Due Today",
        },
    
        {
          icon: <CalendarDays size={20} color="#fff" />,
          name: "Clear Desk Policy",
          due: "Due Next Week",
        },
    
        {
          icon: <Menu size={20} color="#fff" />,
          name: "Use of Flash Drives",
          due: "Due May 15th",
        },
      ];
    
      return (
        <div className="flex gap-4 flex-col">
          <h2 className="text-base font-bold text-blue-800">Reminders</h2>
    
          <div className="flex flex-col gap-2">
            {logs.map((log, index) => {
              return (
                <div className="flex gap-2 items-center" key={`logs-${index}`}>
                  <div className="bg-blue-700 w-10 h-10 rounded-md flex items-center justify-center">
                    {log.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-zinc-900 text-sm">{log.name}</p>
                    <p className="text-zinc-400 text-sm">{log.due}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default UserLog;