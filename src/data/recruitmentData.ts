import type { PositionDetail, BenefitItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: 'Công ty Cổ phần Phát triển Địa Ốc Á Châu',
  brandName: 'ACHAU REAL ESTATE',
  establishedYear: 2017,
  establishedDate: '10/04/2017',
  hotline: '0989 661 661',
  hotlineClean: '0989661661',
  zaloUrl: 'https://zalo.me/2642909754794097414',
  facebookUrl: 'https://www.facebook.com/diaocachau',
  websiteUrl: 'https://diaocachau.com.vn/',
  headquarters: 'Số 493 Đường Phạm Ngọc Thạch, Phường Bình Dương, TP. Hồ Chí Minh',
  branchOffice: 'Số 220 Phạm Văn Đồng, Phường Hạnh Thông, TP. Hồ Chí Minh',
  workingHours: 'Thứ Hai – Thứ Bảy: 08:00 – 17:00',
};

export const POSITIONS_DATA: PositionDetail[] = [
  {
    id: 'chuyen-vien-kinh-doanh',
    title: 'Chuyên viên kinh doanh',
    level: 'Nhân viên kinh doanh BĐS',
    badge: 'Đào tạo từ A–Z',
    summary: 'Cầu nối then chốt đưa các sản phẩm đất nền, nhà phố chất lượng tới khách hàng; trực tiếp tư vấn và xây dựng mối quan hệ khách hàng bền vững.',
    responsibilities: [
      'Tìm kiếm và tiếp cận khách hàng tiềm năng có nhu cầu an cư hoặc đầu tư bất động sản',
      'Giới thiệu, tư vấn thông tin chi tiết về các dự án công ty đang phân phối và phát triển',
      'Hướng dẫn khách hàng tham quan thực tế dự án và giải đáp thắc mắc về pháp lý, quy hoạch',
      'Hỗ trợ khách hàng hoàn thiện thủ tục đặt chỗ, ký hợp đồng và các quy trình liên quan',
      'Chăm sóc khách hàng sau bán hàng và xây dựng mạng lưới khách hàng thân thiết'
    ],
    requirements: [
      'Đam mê lĩnh vực kinh doanh bất động sản, tinh thần cầu tiến và chủ động trong công việc',
      'Kỹ năng giao tiếp tự tin, giọng nói dễ nghe, có khả năng lắng nghe và thấu hiểu khách hàng',
      'Không yêu cầu kinh nghiệm ban đầu – ứng viên mới được công ty đào tạo chuyên sâu từ cơ bản đến nâng cao',
      'Có phương tiện đi lại và thiết bị làm việc cơ bản (smartphone, laptop)',
      'Tốt nghiệp Trung cấp trở lên là một lợi thế (chấp nhận sinh viên mới tốt nghiệp năng động)'
    ],
    benefits: [
      'Lương cơ bản cạnh tranh theo chính sách + Hoa hồng lũy tiến hấp dẫn theo từng sản phẩm giao dịch thành công',
      'Được hỗ trợ chi phí marketing và tiếp cận nguồn dữ liệu khách hàng tiềm năng từ công ty',
      'Tham gia các khóa đào tạo kỹ năng thực chiến: telesale, digital marketing, tư vấn pháp lý và chốt giao dịch',
      'Lộ trình thăng tiến rõ ràng lên Phó phòng kinh doanh chỉ sau thời gian chứng minh năng lực',
      'Được tham gia đầy đủ BHXH, BHYT, chế độ hiếu hỷ, sinh nhật, du lịch và teambuilding hàng năm'
    ],
    note: 'Mô tả nhiệm vụ mang tính định hướng chức danh. Chỉ tiêu kinh doanh và chính sách chi tiết sẽ được trao đổi cụ thể tại buổi phỏng vấn trực tiếp.'
  },
  {
    id: 'pho-phong-kinh-doanh',
    title: 'Phó phòng kinh doanh',
    level: 'Quản lý cấp trung',
    badge: 'Cơ hội bứt phá',
    summary: 'Đồng hành cùng Trưởng phòng dẫn dắt đội ngũ chuyên viên kinh doanh, trực tiếp đào tạo kỹ năng và thúc đẩy doanh số bán hàng của phòng.',
    responsibilities: [
      'Hỗ trợ Trưởng phòng xây dựng và triển khai kế hoạch kinh doanh tháng/quý cho toàn phòng',
      'Kèm cặp, hướng dẫn kỹ năng bán hàng và xử lý tình huống thực tế cho các chuyên viên mới',
      'Trực tiếp hỗ trợ nhân viên tư vấn khách hàng VIP và đàm phán chốt các giao dịch lớn',
      'Theo dõi, đánh giá tiến độ chỉ tiêu của từng thành viên để có giải pháp thúc đẩy kịp thời',
      'Tham gia đóng góp ý kiến về chiến lược tiếp thị sản phẩm và chính sách bán hàng'
    ],
    requirements: [
      'Tối thiểu 1 năm kinh nghiệm kinh doanh trong lĩnh vực bất động sản hoặc vị trí tương đương',
      'Có kỹ năng đàm phán xuất sắc, khả năng truyền cảm hứng và tinh thần làm việc nhóm tốt',
      'Hiểu rõ thị trường bất động sản khu vực Bình Dương, TP.HCM và các tỉnh lân cận',
      'Kỹ năng giải quyết vấn đề và chịu được áp lực doanh số kinh doanh',
      'Tác phong chuyên nghiệp, tinh thần trách nhiệm và đạo đức nghề nghiệp cao'
    ],
    benefits: [
      'Thu nhập kết hợp: Lương quản lý + Hoa hồng bán lẻ cá nhân + Thưởng quản lý theo doanh số toàn nhóm',
      'Được ưu tiên nguồn khách hàng chất lượng và ngân sách marketing riêng cho phòng',
      'Được đào tạo nâng cao về năng lực quản trị, tư duy lãnh đạo và kỹ năng quản lý đội ngũ',
      'Cơ hội quy hoạch và bổ nhiệm chính thức lên vị trí Trưởng phòng kinh doanh',
      'Chế độ đãi ngộ cấp quản lý, du lịch nghỉ dưỡng cao cấp cùng Ban Lãnh đạo công ty'
    ],
    note: 'Yêu cầu kinh nghiệm và cơ chế hoa hồng quản lý sẽ được thỏa thuận minh bạch dựa trên năng lực và quy mô đội nhóm tiếp nhận.'
  },
  {
    id: 'truong-phong-kinh-doanh',
    title: 'Trưởng phòng kinh doanh',
    level: 'Quản lý chiến lược',
    badge: 'Thủ lĩnh đội ngũ',
    summary: 'Thủ lĩnh hoạch định chiến lược kinh doanh, xây dựng và phát triển đội ngũ chuyên viên vững mạnh, cam kết chỉ tiêu doanh số toàn diện.',
    responsibilities: [
      'Xây dựng mục tiêu, kế hoạch bán hàng và ngân sách hoạt động của phòng kinh doanh định kỳ',
      'Trực tiếp tuyển dụng, đào tạo, xây dựng văn hóa đội ngũ đoàn kết, kỷ luật và máu lửa',
      'Chịu trách nhiệm toàn diện về chỉ tiêu doanh số và hiệu quả hoạt động kinh doanh của phòng',
      'Phối hợp cùng Ban Giám đốc và các phòng ban đối tác triển khai các chiến dịch phân phối dự án lớn',
      'Đại diện phòng làm việc với các đối tác chiến lược và xử lý các vấn đề phát sinh trong giao dịch'
    ],
    requirements: [
      'Tối thiểu 1–2 năm kinh nghiệm ở vị trí Trưởng phòng kinh doanh BĐS hoặc quản lý đội ngũ từ 10 nhân sự trở lên',
      'Am hiểu sâu sắc về thị trường bất động sản, pháp lý dự án và các phương thức tiếp thị đa kênh',
      'Khả năng lãnh đạo, tư duy chiến lược, tạo động lực và truyền cảm hứng mạnh mẽ',
      'Kỹ năng quản trị mục tiêu, đàm phán cấp cao và giải quyết xung đột hiệu quả',
      'Có sẵn đội ngũ hoặc nguồn nhân lực kinh doanh tiềm năng là lợi thế lớn'
    ],
    benefits: [
      'Tổng thu nhập quản lý hấp dẫn: Lương cơ bản cấp quản lý + Thưởng hiệu quả doanh số phòng + Thưởng nóng dự án',
      'Được toàn quyền chủ động điều hành và xây dựng cơ cấu nhân sự phòng kinh doanh theo định hướng',
      'Được cấp ngân sách hỗ trợ tuyển dụng, marketing dự án và đào tạo đội ngũ chuyên biệt',
      'Cơ hội tham gia vào các quyết sách chiến lược phát triển mở rộng thị trường của công ty',
      'Chính sách phúc lợi cao cấp: Khám sức khỏe định kỳ VIP, du lịch quốc tế, thưởng cổ phần ưu đãi theo hiệu quả'
    ],
    note: 'Chính sách đãi ngộ, chỉ tiêu cam kết và cơ cấu phòng sẽ được thảo luận chi tiết trực tiếp cùng Ban Giám đốc Địa Ốc Á Châu.'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'income',
    title: 'Chính Sách Thu Nhập Cạnh Tranh',
    description: 'Lương cơ bản theo từng vị trí cùng hệ thống hoa hồng hấp dẫn và các khoản thưởng nóng theo dự án, ghi nhận xứng đáng mọi đóng góp của bạn.',
    iconName: 'BadgePercent',
    highlight: 'Hoa hồng & Thưởng nóng'
  },
  {
    id: 'training',
    title: 'Đào Tạo Thực Chiến Từ Cơ Bản Đến Nâng Cao',
    description: 'Chương trình đào tạo chuyên sâu về kỹ năng tư vấn, telesale, digital marketing và kiến thức pháp lý dự án kết hợp nền tảng học trực tuyến hiện đại.',
    iconName: 'GraduationCap',
    highlight: 'Học hỏi từ chuyên gia'
  },
  {
    id: 'marketing',
    title: 'Hỗ Trợ Marketing & Nguồn Dữ Liệu Khách Hàng',
    description: 'Công ty đồng hành trong các chiến dịch truyền thông đa kênh, cung cấp tài liệu bán hàng chuyên nghiệp và hỗ trợ data khách hàng có nhu cầu thật.',
    iconName: 'Megaphone',
    highlight: 'Hỗ trợ công cụ bán hàng'
  },
  {
    id: 'products',
    title: 'Nguồn Sản Phẩm Dồi Dào, Pháp Lý Minh Bạch',
    description: 'Danh mục dự án đa dạng tại các thị trường trọng điểm như Bình Dương, Bình Phước, với pháp lý hoàn chỉnh, sổ sẵn, tạo niềm tin tuyệt đối cho khách hàng.',
    iconName: 'Building2',
    highlight: 'Dự án thực tế, pháp lý chuẩn'
  },
  {
    id: 'promotion',
    title: 'Lộ Trình Thăng Tiến Rõ Ràng & Minh Bạch',
    description: 'Cơ hội phát triển nghề nghiệp rộng mở từ Chuyên viên lên Phó phòng và Trưởng phòng kinh doanh. Đánh giá dựa trên năng lực và kết quả thực tế.',
    iconName: 'TrendingUp',
    highlight: 'Thăng tiến công bằng'
  },
  {
    id: 'welfare',
    title: 'Phúc Lợi Toàn Diện & Hoạt Động Gắn Kết',
    description: 'Chế độ BHXH, BHYT đầy đủ; chăm lo đời sống với quà sinh nhật, lễ Tết; các hoạt động teambuilding, du lịch nghỉ dưỡng gắn kết tinh thần đồng đội.',
    iconName: 'HeartHandshake',
    highlight: 'Đồng đội vững mạnh'
  }
];

export const RECRUITMENT_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: 'Gửi Thông Tin Ứng Tuyển',
    description: 'Ứng viên gửi hồ sơ trực tuyến qua website, liên hệ Zalo hoặc gọi trực tiếp Hotline Tuyển dụng 0989 661 661.',
    details: 'Đính kèm CV (nếu có) hoặc để lại số điện thoại để chuyên viên tuyển dụng chủ động liên hệ hỗ trợ.'
  },
  {
    step: 2,
    title: 'Tiếp Nhận & Liên Hệ Trao Đổi',
    description: 'Bộ phận Tuyển dụng kiểm tra thông tin và liên hệ ứng viên phù hợp trong vòng 1–3 ngày làm việc.',
    details: 'Xác nhận thông tin cơ bản, vị trí ứng tuyển và thống nhất lịch hẹn phỏng vấn trực tiếp tại văn phòng.'
  },
  {
    step: 3,
    title: 'Phỏng Vấn & Trao Đổi Công Việc',
    description: 'Buổi gặp gỡ cởi mở tại trụ sở hoặc chi nhánh của công ty để trao đổi rõ về công việc, quyền lợi và kỳ vọng hai bên.',
    details: 'Lắng nghe định hướng phát triển của bạn và giải đáp toàn bộ thắc mắc về môi trường làm việc.'
  },
  {
    step: 4,
    title: 'Thông Báo Kết Quả & Hội Nhập',
    description: 'Công ty gửi thông báo kết quả phỏng vấn, hướng dẫn hoàn thiện hồ sơ nhận việc và bắt đầu chương trình đào tạo.',
    details: 'Chào đón thành viên mới gia nhập ngôi nhà chung Địa Ốc Á Châu với chương trình đào tạo nhập môn chu đáo.'
  }
];
