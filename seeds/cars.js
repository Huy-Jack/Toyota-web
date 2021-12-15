const cars =[
    {
        name : 'VIOS 1.5E MT (3 túi khí)',
        model: 'Vios',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe trong nước',
            'Số tay 5 cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {   
        name: 'VIOS 1.5G CVT',
        model: 'Vios',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe trong nước',
            'Số tự động vô cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {   
        name: 'HIACE',
        model: 'Hiace',
        description: [
            '15 Chỗ',
            'Thương mại',
            'Dầu',
            'Xe nhập khẩu',
            'Số sàn 6 cấp',
            'Động cơ Dầu dung tích 2755 cc'
        ]
    },
    {   
        name: 'CAMRY 2.0G',
        model: 'Camry',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe nhập khẩu',
            'Số tự động 6 cấp',
            'Động cơ Xăng dung tích 1998 cc'
        ]
    },
    {   
        name: 'CAMRY 2.5Q',
        model: 'Camry',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe nhập khẩu',
            'Số tự động 6 cấp',
            'Động cơ Xăng dung tích 2494 cc'
        ]
    },
    {   
        name: 'AVANZA AT',
        model: 'Avanza',
        description: [
            '7 Chỗ',
            'Đa dụng',
            'Xăng',
            'Xe nhập khẩu',
            'Số tự động 4 cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {   
        name: 'AVANZA MT',
        model: 'Avanza',
        description: [
            '7 Chỗ',
            'Đa dụng',
            'Xăng',
            'Xe nhập khẩu',
            'Số sàn 5 cấp',
            'Động cơ Xăng dung tích 1329 cc'
        ]
    },
    {   
        name: 'RUSH 1.5AT',
        model: 'Rush',
        description: [
            '7 Chỗ',
            'SUV',
            'Xăng',
            'Xe nhập khẩu',
            'Số tự động 4 cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {   
        name: 'ALPHARD LUXURY',
        model: 'Alphard',
        description: [
            '7 Chỗ',
            'Đa dụng',
            'Xăng',
            'Xe nhập khẩu',
            'Hộp số tự động 8 cấp',
            'Động cơ Xăng dung tích 3456 cc'
        ]
    },
    {
        name: 'VIOS 1.5E MT',
        model: 'Vios',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe trong nước',
            'Số tự động vô cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {
        name: 'VIOS 1.5 E CVT',
        model: 'Vios',
        description: [
            '5 Chỗ',
            'Sedan',
            'Xăng',
            'Xe trong nước',
            'Số tự động vô cấp',
            'Động cơ Xăng dung tích 1496 cc'
        ]
    },
    {
        name: 'GRANVIA',
        model: 'Granvia',
        description: [
            '9 Chỗ',
            'Đa dụng',
            'Dầu',
            'Xe nhập khẩu',
            'Số tự động 6 cấp',
            'Động cơ Dầu dung tích 2755 cc'
        ]
    },
    {
        name: 'COROLLA CROSS 1.8HV',
        model: 'Corolla',
        description: [
            '5 Chỗ',
            'SUV',
            'Xăng',
            'Xe nhập khẩu',
            'Hộp số tự động vô cấp CVT',
            'Động cơ Xăng dung tích 1798 cc'
        ]
    },
    {
        name: 'COROLLA CROSS 1.8V',
        model: 'Corolla',
        description: [
            '5 Chỗ',
            'SUV',
            'Xăng',
            'Xe nhập khẩu',
            'Hộp số tự động vô cấp CVT',
            'Động cơ Xăng dung tích 1798 cc'
        ]
    },
    {
        name: 'COROLLA CROSS 1.8G',
        model: 'Corolla',
        description: [
            '5 Chỗ',
            'SUV',
            'Xăng',
            'Xe nhập khẩu',
            'Số tự động vô cấp/CVT',
            'Động cơ Xăng dung tích 1798 cc'
        ]
    }    
];

const modelCar = ['Fortuner', 'Raize', 'Vios', 'Wigo','Avanza', 'Rush', 'Yaris', 'Hilux', 'Corolla Altis', 'Alphard', 'Granvia', 'Hiace',
'Land Prado', 'Land Cruiser', 'Camry', 'Corolla Cross', 'Innova'];



const origin = ["Xe trong nước", "Xe nhập khẩu"];
const colorsCar = [
    {
        name: 'Đỏ 3R3',
        color: '#60121A',
        price: 531000000,
        image: {
            url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639485684/Toyota/125883CC60FF8AE138743370C91E10DA_wwlyl3.png',
            filename: ''
        }
    }
] 

const interior = [
    {
        name: 'Hệ thống giải trí',
        image: {
            url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639485754/Toyota/D5A7D1D2B129101FE9D42191F1DFABB3_v8lkh9.png',
            filename: ''
        },
        description: `Việc giải trí được tối ưu hóa với Apple Car Play/ Android Auto cho phép bạn bắt đầu cuộc gọi, gửi/nhận tin nhắn văn bản và nghe nhạc. Đặc biệt, Car Play cũng tương thích với Siri cho phép bạn đưa ra yêu cần bạn muốn hoặc cần trong khi lái xe mà không cần rời mắt khỏi tay lái hoặc rời tay lái, đồng thời hoạt động với các nút và nút bấm trên xe của bạn`
    }
]

const exterior = [
    {
        name: 'Gương hậu',
        image: {
            url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639485909/Toyota/2E7A15E60A8D52548C2E1AB9B4BE5ED5_yptfmu.png',
            filename: ''
        },
        description: `Gương chiếu hậu được cải tiến với chức năng điều chỉnh điện ,chức năng gập điện và tích hợp báo rẽ tạo nên sự tiện nghi, dễ dàng hơn hết cho lái xe.`
    }
]

const safe = [
    {
        name: 'Túi khí',
        image: {
            url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639539906/Toyota/8F6428C66423CF9B68964D571AA44AC2_ug1qi8.png',
            filename: ''    
        },
        description: 'Các dòng xe VIOS mới được trang bị hệ thống 7 túi khí gồm 2 túi khí phía trước, 2 túi khí bên hông phía trước, 2 túi khí rèm và 1 túi khí đầu gối người lái sẽ đảm bảo an toàn cho hành khách và người lái trên mọi hành trình.'
    }
]

const operate = [
    {
        name: 'Vận hành êm ái, thoải mái',
        image: {
            url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639539869/Toyota/72022C926EDEDB0624320A6F2AB34511_negaqf.jpg',
            filename: ''
        },
        description: 'Vios thế hệ mới mang lại trải nghiệm thú vị và thư thái.'
    }

]
module.exports= { cars, origin, colorsCar, interior, exterior, operate, safe };