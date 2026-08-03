import { getMeAction } from '@/app/auth/_actions/auth.action'
import { TechnicianProfileView } from '../../_components/technician-profile'

export default async function TechnicianProfilePage() {
    const result = await getMeAction()

    const user = result.data
    const technician = user.technicians

    return (
        <div className="px-4 lg:px-6">
            <TechnicianProfileView user={user} technician={technician} />
        </div>
    )
}