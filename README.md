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

/api/admin/users
```
{
    "success": true,
    "message": "Users retrieved sucessfully.",
    "data": [
        {
            "id": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "name": "new-user",
            "email": "new-user@mail.com",
            "profilePicture": "https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/486646525_122183416784356754_2634252238812666826_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1085&ctp=s1080x1085&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hRJo0s1I4GcQ7kNvwFx4yWc&_nc_oc=AdpYxhK72zuC1X_V3aNBA8A9-dY0-B_yRN4uF_d7kNjXYuQH8eIj_QN-tldG35MZMro&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=gORLIFi4H3nuLWTqkUs-9g&_nc_ss=7b2a8&oh=00_AQHMKkXNInFHYqF45hG9RXCVLAi0V4m4JSDbnF6VIcWYhg&oe=6A70FA90",
            "status": "ACTIVE",
            "role": "CUSTOMER",
            "created_at": "2026-07-30T12:36:37.768Z",
            "updated_at": "2026-07-30T12:36:37.768Z"
        },
        {
            "id": "a5ad7882-9980-477a-8ccf-3959f8a842a3",
            "name": "new-user2",
            "email": "new-user2@mail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "TECHNICIAN",
            "created_at": "2026-07-30T12:37:04.521Z",
            "updated_at": "2026-07-30T12:37:04.521Z"
        },
        {
            "id": "b7afec1c-420c-419f-88cb-eec47f9358c9",
            "name": "new-user3",
            "email": "new-user3@mail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "CUSTOMER",
            "created_at": "2026-07-30T14:49:17.906Z",
            "updated_at": "2026-07-30T14:49:17.906Z"
        },
        {
            "id": "3dfe541d-6ac5-4686-9ca9-fb9ea6e87bf3",
            "name": "new-user4",
            "email": "new-user4@mail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "TECHNICIAN",
            "created_at": "2026-07-30T16:20:02.804Z",
            "updated_at": "2026-07-30T16:20:02.804Z"
        },
        {
            "id": "e70fc5bd-267d-417d-a0c9-d11077f11e75",
            "name": "Admin",
            "email": "admin@admin.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "ADMIN",
            "created_at": "2026-07-30T17:19:19.397Z",
            "updated_at": "2026-07-30T17:19:19.397Z"
        },
        {
            "id": "4b095d7b-1f94-43af-9955-ead123c923a0",
            "name": "Sabbir Ahmed",
            "email": "sabbir.ahmed@mail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "TECHNICIAN",
            "created_at": "2026-07-30T17:29:39.654Z",
            "updated_at": "2026-07-30T17:29:39.654Z"
        },
        {
            "id": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
            "name": "Md Skaib Islam",
            "email": "sakib1234@gmail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "TECHNICIAN",
            "created_at": "2026-07-31T04:36:05.961Z",
            "updated_at": "2026-07-31T04:36:05.961Z"
        },
        {
            "id": "25119fcd-f44a-4345-a31a-1aa52cc82228",
            "name": "Test",
            "email": "test@mail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "CUSTOMER",
            "created_at": "2026-08-01T05:23:13.589Z",
            "updated_at": "2026-08-01T05:23:13.589Z"
        },
        {
            "id": "4c4b8d9c-0283-4ae2-a50f-e9beba8d2c77",
            "name": "Ahsan Habib",
            "email": "ahsan@gmail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "TECHNICIAN",
            "created_at": "2026-08-02T03:09:07.478Z",
            "updated_at": "2026-08-02T03:09:07.478Z"
        },
        {
            "id": "3644cff8-2d32-45c0-b5de-e4eb26ce8bdb",
            "name": "Mess Naldo",
            "email": "mess1234@gmail.com",
            "profilePicture": null,
            "status": "ACTIVE",
            "role": "CUSTOMER",
            "created_at": "2026-08-02T12:35:29.786Z",
            "updated_at": "2026-08-02T12:35:29.786Z"
        }
    ]
}
```
/api/admin/bookings
```
{
    "success": true,
    "message": "Bookings retrieved sucessfully.",
    "data": [
        {
            "id": "8ce98939-7cc4-4444-ab68-84f185502379",
            "status": "REQUESTED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-02T16:50:01.480Z",
            "updatedAt": "2026-08-02T16:50:01.480Z",
            "customerId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "7ebba12b-52d0-42ce-8fcc-ff43805435f1",
            "technician": {
                "id": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                "experience": 10,
                "location": "Gulshan Dhaka, Bangladesh",
                "isVerified": true,
                "avgRating": 5,
                "totalReviews": 1,
                "createdAt": "2026-07-31T06:11:10.938Z",
                "updatedAt": "2026-08-02T13:38:39.342Z",
                "userId": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
                "user": {
                    "name": "Md Skaib Islam",
                    "email": "sakib1234@gmail.com"
                }
            }
        },
        {
            "id": "9ab1d42c-1aef-4598-91cf-e71ed51ccebd",
            "status": "IN_PROGRESS",
            "scheduledAt": "2026-08-12T00:00:00.000Z",
            "bookedAt": "2026-08-02T12:59:26.595Z",
            "updatedAt": "2026-08-02T13:03:07.046Z",
            "customerId": "25119fcd-f44a-4345-a31a-1aa52cc82228",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "7ebba12b-52d0-42ce-8fcc-ff43805435f1",
            "technician": {
                "id": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                "experience": 10,
                "location": "Gulshan Dhaka, Bangladesh",
                "isVerified": true,
                "avgRating": 5,
                "totalReviews": 1,
                "createdAt": "2026-07-31T06:11:10.938Z",
                "updatedAt": "2026-08-02T13:38:39.342Z",
                "userId": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
                "user": {
                    "name": "Md Skaib Islam",
                    "email": "sakib1234@gmail.com"
                }
            }
        },
        {
            "id": "ad2bf8b6-2853-4f01-b057-31fd54b82238",
            "status": "CANCELLED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-01T09:29:15.921Z",
            "updatedAt": "2026-08-02T05:27:14.632Z",
            "customerId": "b7afec1c-420c-419f-88cb-eec47f9358c9",
            "technicianId": "80123883-e7f1-442b-afc8-a34a308cbe9e",
            "serviceId": "78ac44f4-c0b5-4b70-a780-6906836caf7e",
            "technician": {
                "id": "80123883-e7f1-442b-afc8-a34a308cbe9e",
                "experience": 3,
                "location": "Narayanganj, Bangladesh",
                "isVerified": true,
                "avgRating": 0,
                "totalReviews": 0,
                "createdAt": "2026-07-31T06:31:58.963Z",
                "updatedAt": "2026-07-31T06:31:58.963Z",
                "userId": "4b095d7b-1f94-43af-9955-ead123c923a0",
                "user": {
                    "name": "Sabbir Ahmed",
                    "email": "sabbir.ahmed@mail.com"
                }
            }
        },
        {
            "id": "1d791c5a-216e-4994-bf32-8a7c6d591230",
            "status": "CANCELLED",
            "scheduledAt": "2026-08-19T00:00:00.000Z",
            "bookedAt": "2026-08-01T09:27:14.842Z",
            "updatedAt": "2026-08-02T06:02:11.764Z",
            "customerId": "b7afec1c-420c-419f-88cb-eec47f9358c9",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "91cbd825-007a-4a36-a575-fc7c51ce6f0e",
            "technician": {
                "id": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                "experience": 10,
                "location": "Gulshan Dhaka, Bangladesh",
                "isVerified": true,
                "avgRating": 5,
                "totalReviews": 1,
                "createdAt": "2026-07-31T06:11:10.938Z",
                "updatedAt": "2026-08-02T13:38:39.342Z",
                "userId": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
                "user": {
                    "name": "Md Skaib Islam",
                    "email": "sakib1234@gmail.com"
                }
            }
        },
        {
            "id": "d02dbafa-f4f1-4089-a4a1-657e91b564be",
            "status": "CANCELLED",
            "scheduledAt": "2026-08-07T00:00:00.000Z",
            "bookedAt": "2026-08-01T09:21:22.817Z",
            "updatedAt": "2026-08-02T11:11:17.158Z",
            "customerId": "b7afec1c-420c-419f-88cb-eec47f9358c9",
            "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
            "serviceId": "599dea2a-19cf-40f0-bbba-8115281afd66",
            "technician": {
                "id": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                "experience": 10,
                "location": "Gulshan Dhaka, Bangladesh",
                "isVerified": true,
                "avgRating": 5,
                "totalReviews": 1,
                "createdAt": "2026-07-31T06:11:10.938Z",
                "updatedAt": "2026-08-02T13:38:39.342Z",
                "userId": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
                "user": {
                    "name": "Md Skaib Islam",
                    "email": "sakib1234@gmail.com"
                }
            }
        },
        {
            "id": "17f3da92-b34c-4e16-bd4c-6e5c7dae1d58",
            "status": "REQUESTED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-01T08:38:12.639Z",
            "updatedAt": "2026-08-01T08:38:12.639Z",
            "customerId": "a2b8b048-dce2-4895-b5a2-3bb048cec86a",
            "technicianId": "80123883-e7f1-442b-afc8-a34a308cbe9e",
            "serviceId": "78ac44f4-c0b5-4b70-a780-6906836caf7e",
            "technician": {
                "id": "80123883-e7f1-442b-afc8-a34a308cbe9e",
                "experience": 3,
                "location": "Narayanganj, Bangladesh",
                "isVerified": true,
                "avgRating": 0,
                "totalReviews": 0,
                "createdAt": "2026-07-31T06:31:58.963Z",
                "updatedAt": "2026-07-31T06:31:58.963Z",
                "userId": "4b095d7b-1f94-43af-9955-ead123c923a0",
                "user": {
                    "name": "Sabbir Ahmed",
                    "email": "sabbir.ahmed@mail.com"
                }
            }
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
            "technician": {
                "id": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5",
                "experience": 10,
                "location": "Gulshan Dhaka, Bangladesh",
                "isVerified": true,
                "avgRating": 5,
                "totalReviews": 1,
                "createdAt": "2026-07-31T06:11:10.938Z",
                "updatedAt": "2026-08-02T13:38:39.342Z",
                "userId": "d2946ffd-52b7-4b4d-8d32-092d582aac63",
                "user": {
                    "name": "Md Skaib Islam",
                    "email": "sakib1234@gmail.com"
                }
            }
        },
        {
            "id": "5b3c00c9-e8bc-4424-acf0-ca0c3ba964c9",
            "status": "REQUESTED",
            "scheduledAt": "2026-08-14T00:00:00.000Z",
            "bookedAt": "2026-08-01T08:12:17.555Z",
            "updatedAt": "2026-08-01T08:12:17.555Z",
            "customerId": "25119fcd-f44a-4345-a31a-1aa52cc82228",
            "technicianId": "80123883-e7f1-442b-afc8-a34a308cbe9e",
            "serviceId": "78ac44f4-c0b5-4b70-a780-6906836caf7e",
            "technician": {
                "id": "80123883-e7f1-442b-afc8-a34a308cbe9e",
                "experience": 3,
                "location": "Narayanganj, Bangladesh",
                "isVerified": true,
                "avgRating": 0,
                "totalReviews": 0,
                "createdAt": "2026-07-31T06:31:58.963Z",
                "updatedAt": "2026-07-31T06:31:58.963Z",
                "userId": "4b095d7b-1f94-43af-9955-ead123c923a0",
                "user": {
                    "name": "Sabbir Ahmed",
                    "email": "sabbir.ahmed@mail.com"
                }
            }
        }
    ]
}
```

PATCH - /api/admin/users/1bf7fa65-d6a4-4429-b97d-c9d487b3cdf7
```
{
    "status": "ACTIVE"
}
```

/api/categories
```{
    "success": true,
    "message": "Categories retrieved successfully.",
    "data": [
        {
            "id": "ec4dd86d-25a7-4c90-ba57-1f5279cecd66",
            "name": "PAINTING",
            "services": []
        },
        {
            "id": "1cd18afd-1bcd-4e4a-8581-d3e822e15728",
            "name": "PLUBMING",
            "services": [
                {
                    "id": "91cbd825-007a-4a36-a575-fc7c51ce6f0e",
                    "title": "Full House Plumbing & Water Pipe Repair",
                    "description": "Complete leak detection, pipe replacement, bathroom fitting and water pump repair services.",
                    "price": 1300,
                    "isActive": true,
                    "thumbnail": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
                    "createdAt": "2026-07-31T06:28:57.849Z",
                    "updatedAt": "2026-07-31T06:28:57.849Z",
                    "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5"
                }
            ]
        },
        {
            "id": "b92918c9-3924-4274-92db-b83836aa7e1d",
            "name": "ELECTRICS",
            "services": [
                {
                    "id": "78ac44f4-c0b5-4b70-a780-6906836caf7e",
                    "title": "Electrical Wiring & Circuit Breaker Setup",
                    "description": "Safe household electrical wiring, short circuit fix, switchboard & light fitting experts.",
                    "price": 1199,
                    "isActive": true,
                    "thumbnail": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
                    "createdAt": "2026-07-31T06:33:36.734Z",
                    "updatedAt": "2026-07-31T06:33:36.734Z",
                    "technicianId": "80123883-e7f1-442b-afc8-a34a308cbe9e"
                }
            ]
        },
        {
            "id": "e158c41d-11ed-496a-9541-28368805302b",
            "name": "CLEANING",
            "services": [
                {
                    "id": "7ebba12b-52d0-42ce-8fcc-ff43805435f1",
                    "title": "Cleaning Home, Garden, Washroom at The Best Price.",
                    "description": "Clean your home, washroom, garden or others. Man and women as you preferd.",
                    "price": 599,
                    "isActive": true,
                    "thumbnail": "https://i.ibb.co.com/1fLJdnvQ/TC5qcGc.jpg",
                    "createdAt": "2026-08-01T16:48:18.527Z",
                    "updatedAt": "2026-08-01T16:48:18.527Z",
                    "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5"
                }
            ]
        },
        {
            "id": "fb72bda2-4105-4f97-aabc-311cf8d9ba77",
            "name": "REPAIRING",
            "services": [
                {
                    "id": "599dea2a-19cf-40f0-bbba-8115281afd66",
                    "title": "AC Master Servicing & Gas Refill",
                    "description": "Deep chemical cleaning, jet wash, gas leakage check and cooling optimization for all AC brands.",
                    "price": 1850,
                    "isActive": true,
                    "thumbnail": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80",
                    "createdAt": "2026-07-31T06:27:18.590Z",
                    "updatedAt": "2026-07-31T06:27:18.590Z",
                    "technicianId": "37f5b1c2-c6c1-45b8-9e96-4ccbc2807ac5"
                }
            ]
        }
    ]
}
```

/api/admin/categories
```
{
    "name": "REPAIRING"
}
```