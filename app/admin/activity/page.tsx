import { Activity, Users, Calendar, DollarSign, Megaphone, Flag, Settings } from "lucide-react";

const log = [
  {id:1,action:"New member added",detail:"Angela Davis-Moore joined Rent Control campaign",user:"Tricey Robinson",time:"2026-04-12 3:42 PM",type:"member"},
  {id:2,action:"Event created",detail:"Rent Control Town Hall added for May 20",user:"Tricey Robinson",time:"2026-04-11 11:15 AM",type:"event"},
  {id:3,action:"Donation received",detail:"$1,000 from First Baptist Bronzeville to Seniors Program",user:"System",time:"2026-04-08 9:00 AM",type:"donation"},
  {id:4,action:"Announcement sent",detail:"April General Assembly Reminder sent to all 1,247 members",user:"Roderick Wilson",time:"2026-04-10 2:00 PM",type:"announcement"},
  {id:5,action:"Campaign updated",detail:"Bronzeville Seniors on the Move description updated",user:"Roderick Wilson",time:"2026-04-07 4:30 PM",type:"campaign"},
  {id:6,action:"Member status changed",detail:"James Whitfield marked as Pending",user:"Tricey Robinson",time:"2026-04-06 10:00 AM",type:"member"},
  {id:7,action:"New volunteer",detail:"Renee Jackson logged 12 hours for Housing Bronzeville",user:"System",time:"2026-04-05 6:00 PM",type:"volunteer"},
  {id:8,action:"Settings updated",detail:"Organization contact info updated",user:"Roderick Wilson",time:"2026-04-04 1:15 PM",type:"settings"},
  {id:9,action:"Event RSVP milestone",detail:"Rent Control Town Hall hit 50 RSVPs",user:"System",time:"2026-04-03 8:45 AM",type:"event"},
  {id:10,action:"New member added",detail:"David Okonkwo joined as General Member",user:"Tricey Robinson",time:"2026-04-02 3:00 PM",type:"member"},
];

const icons: Record<string, React.ReactNode> = {
  member: <Users size={14}/>,
  event: <Calendar size={14}/>,
  donation: <DollarSign size={14}/>,
  announcement: <Megaphone size={14}/>,
  campaign: <Flag size={14}/>,
  volunteer: <Users size={14}/>,
  settings: <Settings size={14}/>,
};

const colors: Record<string, string> = {
  member: "bg-blue-100 text-blue-600",
  event: "bg-indigo-100 text-indigo-600",
  donation: "bg-green-100 text-green-600",
  announcement: "bg-amber-100 text-amber-600",
  campaign: "bg-violet-100 text-violet-600",
  volunteer: "bg-sky-100 text-sky-600",
  settings: "bg-gray-100 text-gray-600",
};

export default function ActivityPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Activity Log</h1>
          <p className="text-gray-500 text-sm mt-0.5">All admin actions across the Hope Center platform</p>
        </div>
        <button className="px-4 py-2 text-xs border border-blue-100 text-gray-600 rounded-xl font-bold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">Export Log</button>
      </div>

      <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />
          <div className="space-y-5">
            {log.map((entry) => (
              <div key={entry.id} className="relative flex gap-5 items-start pl-12">
                <div className={`absolute left-2 w-7 h-7 rounded-xl flex items-center justify-center -translate-x-1/2 shadow-sm ${colors[entry.type]}`}>
                  {icons[entry.type]}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-bold text-[#0A1628] text-sm">{entry.action}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{entry.detail}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-gray-400">{entry.time}</div>
                      <div className="text-[10px] text-[#2563EB] font-semibold mt-0.5">{entry.user}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
