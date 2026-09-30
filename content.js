const SHOP_URL = "https://tranthiquynhnhu0901-hue.github.io/shopthethao/";

const ARTICLES = [
  {
    slug:"cach-chon-giay-chay-bo-phu-hop-theo-tung-muc-ich",
    title:"Cách chọn giày chạy bộ phù hợp theo từng mục đích?",
    description:"Cách chọn giày chạy bộ theo kiểu chạy, size, độ đệm, độ bám và cảm giác khi thử để tìm đôi phù hợp nhất.",
    category:"running", categoryName:"Chạy bộ", tag:"CHẠY BỘ / GUIDE",
    cover:"assets/img/running-hero.svg", minutes:6, date:"30/09/2026",
    sections:[
      {id:"muc-dich",kicker:"01 • Mục đích sử dụng",title:"Cách chọn giày chạy bộ theo mục đích sử dụng",blocks:[
        {h3:"Chọn giày chạy bộ theo mục đích",p:"Giày chạy hằng ngày, giày tốc độ và giày trail có thiết kế khác nhau vì phục vụ những nhu cầu khác nhau. Nếu bạn mới chạy và chủ yếu chạy đường nhựa 3–10 km, một đôi daily trainer có độ êm, ổn định và độ bền phù hợp thường là lựa chọn thực tế hơn giày thiên về thi đấu."},
        {h3:"Xác định kiểu chạy và quãng đường",p:"Nếu chạy địa hình, độ bám của đế và khả năng thích nghi với bề mặt trở nên quan trọng hơn. Nếu thường chạy nhanh, trọng lượng và độ phản hồi có thể được ưu tiên. Vì vậy, hãy xác định kiểu chạy chiếm phần lớn lịch của bạn trước khi xét đến thương hiệu hoặc kiểu dáng."},
        {features:[["01","Daily","Ưu tiên sự ổn định, dễ sử dụng và phù hợp với lịch chạy thường xuyên."],["02","Speed","Quan tâm nhiều hơn tới trọng lượng và cảm giác phản hồi khi chạy nhanh."],["03","Trail","Đặt độ bám và khả năng thích nghi địa hình lên vị trí quan trọng."]]}
      ]},
      {id:"size",kicker:"02 • Fit",title:"Cách chọn size giày chạy bộ đúng cách",blocks:[
        {h3:"Khoảng trống mũi và độ ôm gót",p:"Khi chạy, bàn chân có thể nở nhẹ và trượt về phía trước. Một đôi quá sát mũi dễ gây cấn ngón hoặc làm móng chân khó chịu, nhất là khi quãng đường dài hơn. Hãy thử giày vào cuối ngày, mang loại vớ bạn thường chạy và kiểm tra khoảng không phía trước các ngón."},
        {h3:"Cách chọn size giày khi mua online",p:"Gót cần được giữ tương đối chắc nhưng không gây ép đau. Phần giữa bàn chân nên ôm ổn định mà không tạo điểm nóng. Khi mua online, hãy đối chiếu bảng size riêng của hãng thay vì mặc định size giày đi chơi luôn giống size chạy."},
        {quote:"Mẹo: hãy kiểm tra cả độ ôm mũi, giữa bàn chân và gót thay vì chỉ nhìn vào con số size."}
      ]},
      {id:"dem",kicker:"03 • Cushioning",title:"Độ đệm giày chạy bộ và cảm giác khi chạy",blocks:[
        {h3:"Độ đệm ảnh hưởng cảm giác và độ ổn định",p:"Đệm dày thường tạo cảm giác êm nhưng độ ổn định còn phụ thuộc vào hình học đế, độ rộng nền và vật liệu. Vì vậy, một đôi có đế rất dày chưa chắc tạo cảm giác phù hợp với tất cả người chạy. Điều quan trọng là bạn có kiểm soát được bước chạy và cảm thấy tự nhiên hay không."},
        {h3:"Cách kiểm tra độ đệm khi thử giày",p:"Khi thử, hãy đi bộ và chạy nhẹ để đánh giá. Một đôi phù hợp nên tạo cảm giác cân bằng, không có điểm cấn rõ và không làm bàn chân phải thích nghi với cảm giác quá khác so với cách bạn thường vận động."}
      ]},
      {id:"de",kicker:"04 • Outsole",title:"Cách chọn đế giày theo bề mặt chạy",blocks:[
        {h3:"Chọn đế cho đường nhựa, công viên và địa hình",p:"Nếu thường chạy đường ướt hoặc công viên, hãy quan sát phần cao su dưới đế và rãnh bám. Đế dùng cho đường nhựa thường khác với thiết kế của giày trail. Các lug sâu có thể hữu ích trên nền đất hoặc bề mặt gồ ghề, nhưng không phải lúc nào cũng cho cảm giác mượt khi chạy đường nhựa dài."},
        {h3:"Khi nào nên chọn giày đa dụng?",p:"Hãy chọn theo bề mặt bạn thật sự sử dụng nhiều nhất. Nếu lịch chạy gồm nhiều địa hình khác nhau, có thể ưu tiên một đôi đa dụng hoặc phân tách giày theo từng mục đích thay vì buộc một đôi phải đáp ứng mọi nhu cầu."}
      ]},
      {id:"thu",kicker:"05 • Try on",title:"Cách thử giày chạy bộ trước khi mua",blocks:[
        {h3:"Kiểm tra điểm cấn và độ ôm",p:"Khi thử giày, hãy đi bộ nhanh, jog vài phút nếu được phép và đổi hướng nhẹ. Chú ý các điểm cấn ở mũi, mu bàn chân, hai bên bàn chân và gót. Đừng mua một đôi gây đau rõ chỉ vì nghĩ rằng “mang vài hôm sẽ hết đau”."},
        {h3:"So sánh hai mẫu giày trong cùng điều kiện",p:"Nếu phân vân giữa hai mẫu, thử chúng trong cùng điều kiện và cùng loại vớ sẽ dễ nhận ra khác biệt hơn. Hãy xem cảm giác ôm, độ đệm, độ ổn định và trọng lượng có phù hợp với kiểu chạy của bạn không."}
      ]},
      {id:"thay",kicker:"06 • Replacement",title:"Khi nào nên thay giày chạy bộ?",blocks:[
        {h3:"Dấu hiệu giày đã xuống cấp",p:"Không có một con số kilomet áp dụng cho tất cả. Hãy quan sát đế ngoài mòn lệch, đệm mất độ đàn hồi rõ, upper rách hoặc cảm giác chạy thay đổi đáng kể. Những dấu hiệu thực tế này thường hữu ích hơn việc cố bám vào một mốc kilomet cố định."},
        {h3:"Khi đau mới xuất hiện, cần xem lại điều gì?",p:"Nếu xuất hiện đau mới kéo dài, đừng vội kết luận do giày. Tải tập, kỹ thuật, bề mặt và khả năng phục hồi đều có thể liên quan. Khi triệu chứng bất thường kéo dài, nên giảm tải và tìm hỗ trợ chuyên môn phù hợp."}
      ]}
    ],
    conclusion:"Cách chọn giày chạy bộ phù hợp theo từng mục đích nên được tiếp cận theo đúng nhu cầu thực tế thay vì một công thức cứng nhắc. Hãy ưu tiên cách áp dụng phù hợp với mục tiêu, lịch sống và khả năng phục hồi, sau đó điều chỉnh từng bước dựa trên phản ứng của cơ thể."
  },
  {slug:"giay-running-daily",title:"Daily trainer: bắt đầu từ nhu cầu, không phải từ tính năng",description:"Một cách tiếp cận đơn giản để chọn giày chạy hằng ngày.",category:"running",categoryName:"Chạy bộ",tag:"RUNNING",cover:"assets/img/running-daily.svg",minutes:5,date:"29/09/2026",sections:[]},
  {slug:"training-vs-running",title:"Giày training và running khác nhau ở điểm nào?",description:"Nhìn vào mục đích sử dụng, chuyển động và cảm giác để phân biệt hai nhóm giày.",category:"guide",categoryName:"Hướng dẫn",tag:"GUIDE",cover:"assets/img/training.svg",minutes:5,date:"28/09/2026",sections:[]},
  {slug:"chay-5-10km",title:"Chạy 5–10 km: những điều người mới nên chuẩn bị",description:"Checklist gọn cho những buổi chạy đầu tiên.",category:"running",categoryName:"Chạy bộ",tag:"CHẠY BỘ",cover:"assets/img/run-5k.svg",minutes:5,date:"27/09/2026",sections:[]},
  {slug:"zone-2-co-ban",title:"Zone 2 là gì và vì sao người chạy hay nhắc đến?",description:"Giải thích khái niệm theo cách dễ bắt đầu.",category:"fitness",categoryName:"Gym & Fitness",tag:"FITNESS",cover:"assets/img/zone2.svg",minutes:4,date:"26/09/2026",sections:[]},
  {slug:"sports-fashion",title:"Sportswear đi từ phòng tập ra đường phố như thế nào?",description:"Khi hiệu năng và phong cách gặp nhau.",category:"fashion",categoryName:"Sports Fashion",tag:"FASHION",cover:"assets/img/fashion.svg",minutes:6,date:"25/09/2026",sections:[]}
];

const CATEGORIES = {
  running:{name:"Chạy bộ",desc:"Kiến thức, hướng dẫn và câu chuyện dành cho người yêu chạy bộ."},
  fitness:{name:"Gym & Fitness",desc:"Vận động, tập luyện và những kiến thức dễ áp dụng hằng ngày."},
  football:{name:"Bóng đá",desc:"Câu chuyện, văn hóa và nội dung dành cho người yêu bóng đá."},
  fashion:{name:"Sports Fashion",desc:"Sportswear, phong cách và văn hóa thể thao hiện đại."},
  guide:{name:"Hướng dẫn",desc:"Các bài giải thích và hướng dẫn giúp bạn hiểu trước khi chọn."},
  lifestyle:{name:"Lifestyle",desc:"Thể thao đi cùng nhịp sống, thói quen và văn hóa."}
};