/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReviewCard } from '../../_components/review-card';
import { getMyReviewsAction } from './../../_actions/dashboardActions';

const MyReviewsPage = async () => {
  const reviews = await getMyReviewsAction()

  return (
    <div className="px-4 lg:px-6">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-[raleway] font-bold">
          My <span className="secondary-clr">Reviews ({reviews?.data?.length ?? 0})</span>
        </h1>
      </div>

      {reviews.success && reviews.data.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {reviews.data.map((review: any) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {reviews.success ? "You haven't left any reviews yet" : reviews.message}
          </p>
        </div>
      )}
    </div>
  )
}

export default MyReviewsPage