import { getAdminDashboardStats } from '@/app/(private)/dashboard/_actions/statsActions'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react'

export async function SectionCards() {
  const stats = await getAdminDashboardStats()

  const defaultCards = [
    {
      title: 'Total Bookings',
      value: '0',
      trend: '+0%',
      trendUp: true,
      description: 'Bookings this month',
      footer: 'No data available',
    },
    {
      title: 'Total Services',
      value: '0',
      trend: '+0%',
      trendUp: true,
      description: 'Active services',
      footer: 'No data available',
    }
  ]

  let cardsData = defaultCards

  if (stats.success && stats.data) {
    cardsData = [
      {
        title: 'Total Bookings',
        value: stats.data.totalBookings?.toString() || '0',
        trend: `${stats.data.pendingBookings || 0} pending`,
        trendUp: true,
        description: `${stats.data.completedBookings || 0} completed`,
        footer: `${stats.data.totalBookings || 0} total bookings`,
      },
      {
        title: 'Total Services',
        value: stats.data.totalServices?.toString() || '0',
        trend: `${stats.data.activeServices || 0} active`,
        trendUp: true,
        description: 'Available services',
        footer: `${stats.data.totalServices || 0} services total`,
      }
    ]
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {cardsData.map((card, index) => (
        <Card key={index} className="@container/card">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {card.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {card.trendUp ? (
                  <TrendingUpIcon className="size-3" />
                ) : (
                  <TrendingDownIcon className="size-3" />
                )}
                {card.trend}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {card.description}{' '}
              {card.trendUp ? (
                <TrendingUpIcon className="size-4" />
              ) : (
                <TrendingDownIcon className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">{card.footer}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
