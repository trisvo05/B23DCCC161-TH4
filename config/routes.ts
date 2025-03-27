export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},

	///////////////////////////////////
	// DEFAULT MENU
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},
	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},
	{
		path: '/random-user',
		name: 'RandomUser',
		component: './RandomUser',
		icon: 'ArrowsAltOutlined',
	},

	// DANH MUC HE THONG
	// {
	// 	name: 'DanhMuc',
	// 	path: '/danh-muc',
	// 	icon: 'copy',
	// 	routes: [
	// 		{
	// 			name: 'ChucVu',
	// 			path: 'chuc-vu',
	// 			component: './DanhMuc/ChucVu',
	// 		},
	// 	],
	// },

	{
		path: '/van-bang',
		name: 'Văn bằng',
		icon: 'FileTextOutlined',
		routes: [
			{
				path: '/van-bang/tra-cuu',
				name: 'Tra cứu văn bằng',
			},

			{
				path: '/van-bang/quan-ly',
				name: 'Quản lý',
				routes: [
					{
						path: '/van-bang/quan-ly/so-vb',
						name: 'Quản lý số văn bằng',
					},

					{
						path: '/van-bang/quan-ly/quyet-dinh-tn',
						name: 'Quyết định tốt nghiệp',
					},

					{
						path: '/van-bang/quan-ly/bieu-mau-phu-luc-vb',
						name: 'Cấu hình biểu mẫu phụ lục văn bằng',
						component: './bieu-mau-phu-luc-vb/Phuluc',

					},

					{
						path: '/van-bang/quan-ly/thong-tin',
						name: 'Thông tin văn bằng',
					},
				],
			},
		],
	},

	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},
	{
		path: '/',
	},
	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},
	{
		path: '/hold-on',
		component: './exception/DangCapNhat',
		layout: false,
	},
	{
		component: './exception/404',
	},
];
