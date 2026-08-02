/api/reviews/my-reviews
```{
    "success": true,
    "message": "Reviews retrieved successfully.",
    "data": [
        {
            "id": "4bce46ab-fe99-43fd-8fbe-85cd313b369f",
            "rating": 5,
            "comment": "Best services.",
            "createdAt": "2026-08-02T13:38:38.878Z",
            "userId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "bookingId": "9cdfd961-4428-4da9-8eb2-748bc28ae2a0",
            "booking": {
                "service": {
                    "id": "91cbd825-007a-4a36-a575-fc7c51ce6f0e",
                    "title": "Full House Plumbing & Water Pipe Repair",
                    "description": "Complete leak detection, pipe replacement, bathroom fitting and water pump repair services.",
                    "price": 1300,
                    "isActive": true,
                    "thumbnail": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
                    "createdAt": "2026-07-31T06:28:57.849Z",
                    "updatedAt": "2026-07-31T06:28:57.849Z",
                    "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                    "categoryId": "1cd18afd-1bcd-4e4a-8581-d3e822e15728"
                }
            }
        }
    ]
}
```

/api/dashboard/customer
```
{
    "success": true,
    "message": "Stats retrieved successfully.",
    "data": {
        "myTotalBookings": 3,
        "totalPaid": 1300,
        "totalReviewsGiven": 1
    }
}
```

/api/dashboard/admin
```
{
    "success": true,
    "message": "Stats retrieved successfully.",
    "data": {
        "totalUsers": 10,
        "totalTechnicians": 3,
        "totalCustomer": 4,
        "totalServices": 4,
        "totalBookings": 8,
        "totalRevenue": 3749
    }
}
```

/api/dashboard/technician
```
{
    "success": true,
    "message": "Stats retrieved successfully.",
    "data": {
        "myServiceTotalBookings": 5,
        "myServices": 3,
        "totalServicesCompleted": 1,
        "totalServicesRequested": 1,
        "totalEarned": 3749,
        "totalReviewsReceived": 1
    }
}
```
api/bookings
```
{
    "success": true,
    "message": "Users Booking retrieved successfully",
    "data": [
        {
            "id": "17f3da92-b34c-4e16-bd4c-6e5c7dae1d58",
            "status": "REQUESTED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-01T08:38:12.639Z",
            "updatedAt": "2026-08-01T08:38:12.639Z",
            "customerId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "technicianId": "80123883-e7f1-442b-afc8-a34a308cbe9e",
            "serviceId": "78ac44f4-c0b5-4b70-a780-6906836caf7e",
            "service": {
                "title": "Electrical Wiring & Circuit Breaker Setup",
                "description": "Safe household electrical wiring, short circuit fix, switchboard & light fitting experts.",
                "price": 1199
            },
            "payment": null
        },
        {
            "id": "9cdfd961-4428-4da9-8eb2-748bc28ae2a0",
            "status": "COMPLETED",
            "scheduledAt": "2026-08-10T00:00:00.000Z",
            "bookedAt": "2026-08-01T08:16:16.301Z",
            "updatedAt": "2026-08-02T13:03:20.104Z",
            "customerId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "91cbd825-007a-4a36-a575-fc7c51ce6f0e",
            "service": {
                "title": "Full House Plumbing & Water Pipe Repair",
                "description": "Complete leak detection, pipe replacement, bathroom fitting and water pump repair services.",
                "price": 1300
            },
            "payment": {
                "id": "b4fe6cf0-0c61-4201-9dde-b44d76c30ce2",
                "status": "PAID",
                "stripeSessionId": "cs_test_a1a3RqYYFqmwKciDCykSEr3m16AydjYuxFvGAqwbzNSOBQSG04jHaVEvOZ",
                "amount": 1300,
                "paidAt": null,
                "updatedAt": "2026-08-02T10:58:01.280Z",
                "bookingId": "9cdfd961-4428-4da9-8eb2-748bc28ae2a0"
            }
        },
        {
            "id": "8ce98939-7cc4-4444-ab68-84f185502379",
            "status": "REQUESTED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-02T16:50:01.480Z",
            "updatedAt": "2026-08-02T16:50:01.480Z",
            "customerId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "7ebba12b-52d0-42ce-8fcc-ff43805435f1",
            "service": {
                "title": "Cleaning Home, Garden, Washroom at The Best Price.",
                "description": "Clean your home, washroom, garden or others. Man and women as you preferd.",
                "price": 599
            },
            "payment": null
        }
    ]
}
```


Make me a customer dashboard stats accoroding to these data.

{

  success: true,

  message: 'Stats retrieved successfully.',

  data: { myTotalBookings: 3, totalPaid: 1300, totalReviewsGiven: 1 }

}



There will be 3 cards: My Total Bookings, Total Paid, Total Reviews Given.



