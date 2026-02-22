import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Supervision, TeachingEngagement } from '@/lib/academic-data';

interface AcademicCardProps {
  type: 'teaching' | 'supervision';
  items: TeachingEngagement[] | Supervision[];
  title: string;
}

export function AcademicCard({ type, items, title }: AcademicCardProps) {
  return (
    <Card className=" bg-white">
      <CardHeader className="">
        <CardTitle className="text-black text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {type === 'teaching' &&
            (items as TeachingEngagement[]).map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 last:border-b-0"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p className="text-black font-medium">{item.title}</p>
                    <p className="text-sm text-gray-700">({item.code})</p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {item.season}
                  </span>
                </div>
              </div>
            ))}

          {type === 'supervision' &&
            (items as Supervision[]).map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 last:border-b-0"
              >
                <p className="text-black font-medium mb-2">{item.topic}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Period:</span>{' '}
                    {item.dateRange}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Scholar:</span>{' '}
                    {item.scholars}
                  </p>
                  {item.otherSupervisors && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Other Supervisors:</span>{' '}
                      {item.otherSupervisors}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
