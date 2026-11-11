// Gợi ý suy niệm theo bộ bài đọc.
//
// Khóa (giống cách web tra bài đọc):
//   "T<mã mùa>-<năm A/B/C>"  Chúa Nhật và lễ của Chúa theo mùa, ví dụ "T5330-A" = CN XXXIII Thường Niên năm A
//   "T<mã mùa>-<1|2>"        ngày thường Mùa Thường Niên (năm lẻ / năm chẵn)
//   "T<mã mùa>"              ngày thường các mùa khác
//   "S<mã lễ>"               lễ thánh, Tết, lễ vọng, kính trọng thể (ví dụ "S72411")
//   "O<mã>"                  bài đọc tùy chọn
//   Thêm "#<số>" (0, 1, …) khi một tab có nhiều bộ bài đọc (ví dụ ba Thánh lễ Giáng Sinh).
//
// Các trường: theme (ý chính, 1 câu), first / psalm / second / gospel (ý từng bài đọc),
// connect (nối kết các bài đọc), question (câu hỏi gợi suy), action (sống Lời Chúa).
// Thấy chỗ nào sai thì sửa thẳng trong file này.
// Số câu Kinh Thánh ghi trong ngoặc, ví dụ (c. 30), theo số câu trong bài đọc.

window.MEDITATIONS = window.MEDITATIONS || {};
Object.assign(window.MEDITATIONS, {

  // ---------------------------------------------------------------- 15/11/2026
  'T5330-A': {
    theme: 'Trung tín làm sinh lợi những gì Chúa trao, trong khi chờ ngày Người trở lại.',
    first: 'Người phụ nữ đảm đang được ca ngợi không vì nhan sắc, mà vì lòng kính sợ Chúa, sự chăm chỉ và bàn tay mở ra cho người nghèo (c. 20, 30). Khôn ngoan thật hiện ra trong những việc bình thường hằng ngày được làm với trách nhiệm và tình thương.',
    psalm: 'Phúc lành của người kính sợ Chúa không ở đâu xa: nơi công việc tay mình làm và nơi mái ấm gia đình. Hạnh phúc là hoa trái của một đời sống ngay thẳng trước mặt Chúa.',
    second: 'Ngày của Chúa đến như kẻ trộm ban đêm (c. 2). Người tín hữu là con cái ánh sáng (c. 5), nên tỉnh thức và sống tiết độ, đừng ngủ mê như những người tự nhủ "Yên ổn và an toàn" (c. 3).',
    gospel: 'Ông chủ trao nén bạc cho mỗi người "tuỳ theo khả năng của mỗi người". Điều ông chờ đợi không phải là số lượng, mà là sự trung tín. Người đầy tớ thứ ba chôn giấu nén bạc vì sợ, và vì mang một hình ảnh sai về chủ: "ông là người keo kiệt" (c. 24). Sợ hãi làm tê liệt; tin vào lòng tốt của Chúa giúp ta dám liều mình làm sinh lợi.',
    connect: 'Bài đọc I và Tin Mừng gặp nhau ở một điểm: người phụ nữ đảm đang và hai đầy tớ trung tín đều làm sinh lợi điều mình được trao, qua những việc nhỏ mỗi ngày. Bài đọc II được đọc liên tục theo thư Thê-xa-lô-ni-ca, không chọn riêng cho Tin Mừng, nhưng hợp với những tuần cuối năm phụng vụ: Chúa sẽ trở lại. Tỉnh thức không phải là ngồi chờ, mà là trung tín làm việc của mình.',
    question: 'Tôi đang "chôn" ơn huệ nào Chúa ban vì sợ thất bại, sợ bị đánh giá, hay vì nghĩ Chúa keo kiệt, khắt khe với mình?',
    action: 'Hôm nay, dùng một khả năng của mình để phục vụ một người cụ thể trong gia đình hoặc giáo xứ.'
  },

  // 15/11/2026 – tab "Kính trọng thể" Các Thánh Tử Đạo Việt Nam
  'S72411': {
    theme: 'Theo Chúa đến cùng: thập giá là con đường dẫn tới sự sống.',
    first: 'Linh hồn người công chính ở trong tay Thiên Chúa. Trước mắt người đời, cái chết của họ là thất bại, nhưng thật ra họ đang được bình an. Thiên Chúa thử luyện họ như vàng trong lò lửa (c. 6).',
    psalm: 'Ai gieo trong lệ sầu sẽ gặt trong hân hoan. Máu các thánh tử đạo là hạt giống đã trổ sinh đức tin cho Giáo hội Việt Nam hôm nay.',
    second: 'Lời rao giảng về thập giá là điên rồ đối với người đời, nhưng là sức mạnh của Thiên Chúa. Cái yếu đuối của Thiên Chúa còn mạnh hơn sức mạnh loài người (c. 25).',
    gospel: 'Theo Chúa là từ bỏ mình và vác thập giá "hằng ngày" (c. 23). Tử đạo không chỉ là một lần đổ máu, mà còn là sự trung tín mỗi ngày. Ai liều mất mạng sống vì Chúa thì sẽ cứu được mạng sống ấy.',
    connect: 'Cả bốn bài đọc nói cùng một nghịch lý: điều thế gian coi là thất bại (cái chết, nước mắt, thập giá) lại là nơi Thiên Chúa tỏ sức mạnh của Người. Các thánh tử đạo Việt Nam đã sống nghịch lý ấy giữa hoàn cảnh cụ thể của quê hương mình.',
    question: '"Vác thập giá mình hằng ngày" với tôi hôm nay là gì? Có khi nào tôi xấu hổ vì Chúa nơi làm việc, trong gia đình hay trên mạng xã hội (c. 26)?',
    action: 'Tìm đọc về một vị thánh tử đạo Việt Nam (có thể là quan thầy giáo xứ hay của bản thân) và cầu nguyện cho Giáo hội Việt Nam.'
  },

  // ---------------------------------------------------------------- 22/11/2026
  'T5340-A': {
    theme: 'Vua của chúng ta là Mục Tử, và Người sẽ xét xử chúng ta theo tình yêu.',
    first: 'Chính Thiên Chúa chăn dắt đoàn chiên: tìm con thất lạc, băng bó con bị thương, nâng đỡ con yếu đuối. Nhưng Người cũng xét xử giữa chiên với chiên (c. 17). Vương quyền của Thiên Chúa là chăm sóc và công minh.',
    psalm: '"Chúa chăn nuôi tôi" là lời của một người đã cảm nghiệm vị Vua ấy cách riêng tư: Người dẫn tới đồng cỏ, dọn sẵn bàn tiệc, đi cùng cả trong thung lũng tối tăm.',
    second: 'Đức Kitô phục sinh là hoa quả đầu mùa. Người hiển trị cho đến khi tiêu diệt kẻ thù cuối cùng là sự chết, "để Thiên Chúa nên mọi sự trong mọi sự" (c. 28).',
    gospel: 'Tiêu chuẩn của cuộc phán xét là những việc rất cụ thể: cho người đói ăn, cho người khát uống, đón khách lạ, cho kẻ trần truồng mặc, thăm người đau yếu và người bị tù. Cả hai nhóm đều ngạc nhiên: "Có bao giờ…?" Vị Vua ẩn mình nơi "một trong các anh em bé mọn nhất" (c. 40).',
    connect: 'Bài đọc I và Tin Mừng cùng dùng hình ảnh mục tử xét xử giữa chiên và chiên, giữa chiên và dê. Ê-dê-ki-en hứa chính Thiên Chúa sẽ chăn dắt dân; Mát-thêu cho thấy lời hứa ấy thành hiện thực nơi Con Người. Bài đọc II mở rộng tầm nhìn: vương quyền ấy hướng tới chiến thắng chung cuộc trên sự chết. Lễ này khép lại năm phụng vụ: lịch sử có đích điểm là Đức Kitô.',
    question: 'Tuần qua, tôi đã gặp Đức Kitô nơi người bé mọn nào mà chưa nhận ra Người?',
    action: 'Chọn một trong sáu việc Chúa kể trong Tin Mừng và làm ngay trong tuần này, chẳng hạn thăm một người đau yếu hay giúp một người đang thiếu thốn.'
  },

  // ---------------------------------------------------------------- 29/11/2026 (bắt đầu năm B)
  'T1010-B': {
    theme: 'Tỉnh thức: Chúa là Cha, là người thợ gốm, và Người đang đến.',
    first: 'Lời khẩn nài của dân Chúa sau lưu đày: "Xin Chúa băng qua các tầng trời mà ngự xuống"! Trong lời sám hối, họ thú nhận rằng khi xa Chúa, ngay cả những việc công chính của mình cũng như "chiếc áo dơ bẩn". Đó không phải lời khinh chê việc lành, mà là lời của người khiêm tốn nhận ra mình cần được Chúa thanh tẩy. Họ vẫn tin cậy: Chúa là Cha, chúng con là đất sét, Ngài là thợ gốm.',
    psalm: '"Xin tỏ thiên nhan hiền từ Chúa ra." Mùa Vọng là mùa khao khát được thấy mặt Chúa và được Người phục hồi.',
    second: 'Thánh Phao-lô tạ ơn vì cộng đoàn không thiếu một ân sủng nào trong khi chờ Chúa tỏ mình ra. Thiên Chúa là Đấng trung tín (c. 9). Ta chờ đợi không phải với hai bàn tay trắng.',
    gospel: 'Như người đi xa giao việc cho từng đầy tớ và dặn người giữ cửa phải tỉnh thức, ta không biết lúc nào chủ về. "Điều Ta bảo cho các con, thì Ta bảo cho tất cả mọi người là: Hãy tỉnh thức!" (c. 37).',
    connect: 'I-sai-a xin Chúa "ngự xuống", còn Mác-cô báo Chúa sẽ đến bất ngờ: Mùa Vọng nối lời khẩn cầu của Cựu Ước với niềm chờ đợi của Kitô hữu. Bài đọc II cho biết ta chờ đợi trong ân sủng, dựa vào sự trung tín của Thiên Chúa. Đây cũng là Chúa Nhật đầu năm B, năm đọc Tin Mừng theo Thánh Mác-cô.',
    question: 'Điều gì đang khiến tôi "ngủ" như người đầy tớ trong Tin Mừng: bận rộn, điện thoại, hay một thói quen, khiến tôi không nhận ra Chúa đang đến?',
    action: 'Trong Mùa Vọng, dành ra 10 phút thinh lặng mỗi ngày, hoặc bớt một thói quen làm mình xao lãng.'
  },

  // ---------------------------------------------------------------- 06/12/2026
  'T1020-B': {
    theme: 'Dọn đường cho Chúa: Thiên Chúa đến để ủi an.',
    first: '"Hỡi dân Ta, hãy an tâm, hãy an tâm!" (c. 1). Thời nô lệ đã chấm dứt. Hãy dọn đường trong hoang địa: "Hãy lấp mọi hố sâu và hãy bạt mọi núi đồi" (c. 4). Thiên Chúa đến như mục tử ẵm chiên con vào lòng (c. 11).',
    psalm: 'Tình thương và lòng thành gặp gỡ, công lý và hòa bình giao duyên: hình ảnh ơn cứu độ đang đến gần.',
    second: 'Với Chúa, một ngày như ngàn năm (c. 8). Chúa chậm trễ vì kiên nhẫn, muốn mọi người được hoán cải (c. 9). Ta chờ trời mới đất mới bằng đời sống thánh thiện và đạo đức.',
    gospel: '"Khởi đầu Phúc Âm của Đức Giê-su Ki-tô Con Thiên Chúa" (c. 1). Gioan trong hoang địa kêu gọi sám hối, sống đơn sơ, và chỉ về Đấng quyền thế hơn mình. Người dọn đường không giữ chỗ cho bản thân.',
    connect: 'Mác-cô mở đầu Tin Mừng bằng chính lời I-sai-a 40 để giới thiệu Gioan: lời hứa an ủi nay thành hiện thực. Bài đọc II giải thích vì sao Chúa "chậm trễ": thời gian chờ đợi là ơn để hoán cải. Cả ba bài cho thấy dọn đường không phải vì sợ hãi, mà để đón Đấng đến ủi an ta.',
    question: '"Núi đồi" nào trong tôi (kiêu ngạo, hờn giận) cần được bạt thấp, và "hố sâu" nào (chán nản, buông xuôi) cần được lấp đầy?',
    action: 'Chuẩn bị đi xưng tội trong Mùa Vọng, hoặc chủ động làm hòa với một người.'
  },

  // ---------------------------------------------------------------- 08/12 – Đức Mẹ Vô Nhiễm Nguyên Tội (mọi năm)
  'S70812': {
    theme: 'Thiên Chúa dọn sẵn cho Con một người Mẹ đầy ân sủng, và mời ta cùng thưa "xin vâng".',
    first: 'Sau khi phạm tội, con người trốn tránh và đổ lỗi cho nhau. Nhưng Thiên Chúa vẫn đi tìm: "Ngươi đang ở đâu?" (c. 9). Ngay giữa cảnh sa ngã, Người hứa cuộc chiến giữa dòng dõi người nữ và con rắn (c. 15). Truyền thống Hội Thánh gọi lời hứa này là Tin Mừng đầu tiên.',
    psalm: 'Hãy hát mừng Chúa một bài ca mới, vì Người đã thực hiện những kỳ công. Nơi Đức Maria, chiến thắng của Thiên Chúa trên tội lỗi đã bắt đầu.',
    second: 'Thiên Chúa đã chọn ta trong Đức Kitô trước khi tạo thành vũ trụ, để ta nên thánh thiện và tinh tuyền trước mặt Người (c. 4). Điều Thiên Chúa làm trọn vẹn nơi Đức Maria ngay từ đầu, Người cũng muốn làm nơi mỗi chúng ta.',
    gospel: 'Sứ thần chào Đức Maria là người "đầy ơn phúc" (c. 28): Mẹ được Thiên Chúa đổ đầy trước khi làm được điều gì. Mẹ bối rối, đặt câu hỏi, rồi thưa: "Này tôi là tôi tớ Chúa" (c. 38). Ơn vô nhiễm không lấy mất tự do của Mẹ, mà làm cho tự do ấy trọn vẹn.',
    connect: 'Bài đọc I cho thấy người nữ đầu tiên trốn tránh Thiên Chúa; Tin Mừng cho thấy người nữ mới mở lòng đón Người. Bài đọc II nối hai cảnh ấy: kế hoạch yêu thương của Thiên Chúa có từ trước muôn đời và không bị tội lỗi làm hỏng. Lễ này rơi vào Mùa Vọng vì Đức Maria là người chờ đón Chúa cách trọn hảo nhất.',
    question: 'Khi Chúa hỏi "Ngươi đang ở đâu?", tôi đang trốn Người ở góc nào trong đời mình?',
    action: 'Đọc chậm rãi Kinh Truyền Tin hôm nay, dừng lại ở lời "xin vâng" của Mẹ.'
  },

  // ---------------------------------------------------------------- 13/12/2026 – Chúa Nhật Gaudete
  'T1030-B': {
    theme: 'Vui lên trong Chúa: Đấng mang tin vui đã đứng giữa chúng ta.',
    first: 'Người được Thần Khí Chúa xức dầu được sai đi mang tin mừng cho người nghèo, băng bó những tâm hồn tan nát, công bố năm hồng ân của Chúa (c. 1-2). Sau này, Chúa Giê-su sẽ nhận lời ngôn sứ ấy cho chính mình tại Na-da-rét. Niềm vui được ví như cô dâu chú rể trong ngày cưới (c. 10).',
    psalm: 'Thay cho thánh vịnh là bài ca của Đức Maria. Đây là niềm vui của người nghèo hèn được Thiên Chúa đoái nhìn: Người hạ bệ kẻ quyền thế và nâng cao người phận nhỏ.',
    second: 'Vui mừng luôn mãi, cầu nguyện không ngừng, tạ ơn trong mọi hoàn cảnh (c. 16-18): ba thái độ của người đang chờ Chúa đến. Đừng dập tắt Thần Khí (c. 19).',
    gospel: 'Gioan không phải là ánh sáng, ông chỉ đến để làm chứng về ánh sáng (c. 8). Ông lần lượt từ chối mọi danh hiệu người ta gán cho mình, chỉ nhận mình là "tiếng kêu" trong hoang địa. Ông nói: "giữa các ngươi, có Đấng mà các ngươi không biết" (c. 26).',
    connect: 'Chúa Nhật III Mùa Vọng là Chúa Nhật của niềm vui. I-sai-a loan báo tin vui; Đức Maria hát lên niềm vui ấy; Thánh Phao-lô biến niềm vui thành lối sống; Gioan vui vì được chỉ về Đấng khác. Niềm vui Kitô giáo không đến từ hoàn cảnh dễ chịu, mà vì Chúa đã ở gần.',
    question: 'Đức Kitô đang ở giữa đời tôi ở đâu mà tôi chưa nhận ra? Tôi có khiêm tốn như Gioan, để người khác nhìn thấy Chúa thay vì nhìn thấy tôi?',
    action: 'Mỗi tối trong tuần này, tạ ơn Chúa ba điều cụ thể; mang niềm vui đến cho một người đang buồn.'
  },

  // ---------------------------------------------------------------- 20/12/2026
  'T1040-B': {
    theme: 'Không phải ta xây nhà cho Chúa, mà Chúa xây nhà cho ta: lời hứa với Đa-vít thành hiện thực nơi Đức Maria.',
    first: 'Vua Đa-vít muốn xây nhà cho Thiên Chúa. Nhưng Chúa đáp lại: chính Người sẽ xây cho Đa-vít một nhà, tức là một dòng tộc, với ngai vàng vững bền muôn đời (c. 11, 16). Sáng kiến luôn thuộc về Thiên Chúa.',
    psalm: 'Tôi sẽ ca ngợi tình thương Chúa đến muôn đời. Giao ước với Đa-vít là dấu chỉ Thiên Chúa trung tín với lời Người đã hứa.',
    second: 'Mầu nhiệm được giữ kín từ muôn thuở nay đã được tỏ lộ (c. 25-26), để mọi dân tộc đón nhận đức tin. Lời chúc tụng khép lại thư Rô-ma hướng ta về Thiên Chúa, Đấng duy nhất khôn ngoan.',
    gospel: 'Sứ thần báo tin Con trẻ sẽ được ngai vàng vua Đa-vít, và triều đại của Người sẽ vô cùng vô tận (c. 32-33). Trước điều không thể theo sức người, sứ thần nói: với Thiên Chúa, không có gì là không thể làm được (c. 37). Đức Maria không xây gì cho Chúa; Mẹ để Chúa xây nơi chính mình.',
    connect: 'Bài đọc I và Tin Mừng là lời hứa và sự hoàn thành: "nhà" Đa-vít trở thành ngai vàng của Con Đức Maria. Bài đọc II cho thấy đó là mầu nhiệm ẩn giấu từ muôn đời nay được mặc khải. Từ Đa-vít đến Đức Maria, con người muốn làm điều gì đó cho Chúa, còn Chúa lại muốn làm cho con người. Điều Người cần là một tấm lòng đón nhận.',
    question: 'Tôi có đang cố xây nhà cho Chúa bằng sức riêng, mà quên để Chúa hành động nơi mình?',
    action: 'Dọn cho Chúa một chỗ trong ngày trước lễ Giáng Sinh: tham dự một Thánh lễ ngày thường, hoặc cùng gia đình làm hang đá kèm lời cầu nguyện.'
  },

  // ---------------------------------------------------------------- 24/12 – Thánh lễ ban sáng (mọi năm)
  'T22412': {
    theme: 'Vầng Đông từ trời cao viếng thăm: Thiên Chúa giữ trọn lời hứa.',
    first: 'Thiên Chúa hứa với vua Đa-vít một dòng dõi và một ngai vàng vững bền muôn đời. Đêm nay, lời hứa ấy được thực hiện cách không ai ngờ: nơi một Hài Nhi sinh ra trong máng cỏ.',
    psalm: 'Tôi sẽ ca ngợi tình thương Chúa đến muôn đời: Thiên Chúa không quên giao ước của Người.',
    gospel: 'Sau những tháng câm lặng, ông Da-ca-ri-a được đầy Thánh Thần và cất lời chúc tụng Thiên Chúa, vì Người đã viếng thăm và cứu chuộc dân Người (c. 68). Bài ca khép lại bằng hình ảnh ánh sáng từ trời cao chiếu soi những ai ngồi trong tối tăm và bóng sự chết (c. 78-79).',
    connect: 'Bài đọc I là lời hứa với Đa-vít; Da-ca-ri-a chúc tụng vì Thiên Chúa đã nhớ lại giao ước và gây dựng ơn cứu độ trong nhà Đa-vít. Mỗi sáng, Hội Thánh hát lại bài ca này trong Kinh Sáng. Hôm nay, chỉ còn vài giờ nữa là đến lễ Giáng Sinh.',
    question: 'Sự thinh lặng của Da-ca-ri-a đã trổ sinh lời chúc tụng. Hôm nay tôi có dành chút thinh lặng để chuẩn bị đón Chúa?',
    action: 'Trước Thánh lễ đêm nay, dành vài phút ngồi yên trước hang đá.'
  },

  // ---------------------------------------------------------------- Lễ Vọng Giáng Sinh (chiều 24/12, mọi năm)
  'S224122': {
    theme: 'Emmanuel: Thiên Chúa ở cùng chúng ta, đi vào chính lịch sử của con người.',
    first: 'Thiên Chúa yêu dân Người như chàng trai cưới cô dâu (c. 5). Dân từng bị gọi là "kẻ bị ruồng bỏ" nay được gọi là "kẻ Ta ưa thích" (c. 4). Với Thiên Chúa, không ai bị bỏ rơi mãi mãi.',
    psalm: 'Tôi sẽ ca ngợi tình thương Chúa đến muôn đời: Người đã lập giao ước với Đa-vít, tôi tớ Người.',
    second: 'Thánh Phao-lô kể lại lịch sử Ít-ra-en, từ thời xuất hành đến vua Đa-vít, để cho thấy tất cả dẫn tới Đức Giê-su, Đấng Cứu Độ thuộc dòng dõi Đa-vít.',
    gospel: 'Gia phả của Chúa Giê-su có cả những người tội lỗi và những phụ nữ ngoại bang: Thiên Chúa vẫn viết thẳng trên những dòng cong. Thánh Giu-se, người công chính, nghe lời sứ thần và đón Đức Maria về nhà. Con trẻ được gọi là Em-ma-nu-en, nghĩa là Thiên Chúa ở cùng chúng ta (c. 23).',
    connect: 'Cả ba bài đọc đều kể lịch sử: dân bị bỏ rơi được yêu thương (I-sai-a), lịch sử Ít-ra-en (Công vụ), gia phả của Chúa (Mát-thêu). Giáng Sinh không phải chuyện cổ tích ngoài đời thực. Thiên Chúa đi vào lịch sử thật, có cả tội lỗi và những khúc quanh, để ở cùng chúng ta.',
    question: 'Gia phả của Chúa có cả tội nhân. Tôi có tin Chúa cũng muốn bước vào những trang đời chưa đẹp của tôi?',
    action: 'Cầu nguyện cho các thế hệ trong gia đình mình, những người còn sống và những người đã qua đời.'
  },

  // ---------------------------------------------------------------- 25/12 – ba Thánh lễ Giáng Sinh (mọi năm)
  'T22512#0': {
    theme: 'Một ánh sáng bừng lên trong đêm tối: Hài Nhi nằm trong máng cỏ là Đấng Cứu Độ.',
    first: 'Dân đang đi trong tối tăm đã thấy một ánh sáng huy hoàng (c. 2). Một Trẻ Thơ được sinh ra cho chúng ta, được gọi là Cố Vấn kỳ diệu, Thiên Chúa dũng mãnh, Thủ Lãnh hòa bình (c. 6).',
    psalm: 'Hôm nay Đấng Cứu Thế đã giáng sinh cho chúng ta: trời đất và muôn loài cùng vui mừng trước nhan Chúa.',
    second: 'Ân sủng của Thiên Chúa đã xuất hiện, đem ơn cứu độ cho mọi người (c. 11). Ân sủng ấy dạy ta sống tiết độ, công chính và đạo đức ngay ở đời này.',
    gospel: 'Lệnh kiểm tra dân số của hoàng đế khiến Con Thiên Chúa sinh ra như một người vô danh giữa đường, nằm trong máng cỏ vì không còn chỗ trong nhà trọ (c. 7). Tin vui đến trước tiên với những người mục đồng nghèo. Dấu chỉ được ban là một trẻ sơ sinh bọc tã, nằm trong máng cỏ (c. 12).',
    connect: 'I-sai-a hứa một ánh sáng và một trẻ thơ làm vua; Lu-ca cho thấy vị Vua ấy nằm trong máng cỏ; thư Ti-tô nói lên ý nghĩa: ân sủng đã xuất hiện và đổi mới cách ta sống. Quyền năng Thiên Chúa tỏ ra trong sự bé nhỏ.',
    question: '"Nhà trọ" lòng tôi hôm nay còn chỗ cho Chúa không, hay đã chật kín những lo toan khác?',
    action: 'Mời một người cô đơn hoặc xa nhà cùng chung vui Giáng Sinh.'
  },
  'T22512#1': {
    theme: 'Như các mục đồng: vội vã đến gặp Chúa, rồi ra về tôn vinh Người.',
    first: 'Kìa Đấng Cứu Độ của ngươi đang đến. Dân Chúa sẽ được gọi là dân thánh, là thành không bị bỏ rơi (c. 11-12).',
    psalm: 'Hôm nay ánh sáng bừng lên chiếu soi chúng ta, vì Chúa đã giáng sinh.',
    second: 'Lòng nhân hậu và tình thương của Thiên Chúa đã xuất hiện (c. 4). Người cứu chúng ta không phải vì những việc công chính ta đã làm, nhưng vì lòng thương xót của Người (c. 5).',
    gospel: 'Các mục đồng vội vã ra đi, gặp Đức Maria, Thánh Giu-se và Hài Nhi, rồi kể lại điều đã được nghe; ai nghe cũng ngạc nhiên. Còn Đức Maria thì ghi nhớ mọi điều ấy và suy đi nghĩ lại trong lòng (c. 19).',
    connect: 'I-sai-a báo Đấng Cứu Độ đến; thư Ti-tô nói Người đến vì lòng thương xót, không vì công trạng của ta; Lu-ca cho thấy hai cách đáp lại: mục đồng ra đi loan báo, còn Đức Maria giữ lại để suy niệm. Đời sống đức tin cần cả hai.',
    question: 'Tôi giống mục đồng (vội đến, vội loan báo) hay giống Đức Maria (ghi nhớ và suy đi nghĩ lại)? Tôi đang thiếu điều nào?',
    action: 'Chọn một câu Lời Chúa hôm nay để mang theo và suy nghĩ suốt ngày.'
  },
  'T22512#2': {
    theme: 'Ngôi Lời đã làm người và ở giữa chúng ta.',
    first: 'Đẹp thay bước chân người loan báo tin mừng bình an (c. 7). Thiên Chúa an ủi dân Người, và mọi tận cùng cõi đất sẽ thấy ơn cứu độ của Người (c. 10).',
    psalm: 'Mọi tận cùng cõi đất đã xem thấy ơn cứu độ của Thiên Chúa chúng ta.',
    second: 'Xưa kia, Thiên Chúa đã nhiều lần nhiều cách phán dạy qua các ngôn sứ; nay Người phán dạy chúng ta qua Thánh Tử (c. 1-2), Đấng phản ánh vinh quang của Người.',
    gospel: 'Lúc khởi đầu đã có Ngôi Lời, và Ngôi Lời là Thiên Chúa. "Người đã đến nhà mình, nhưng người nhà không nhận biết Người" (c. 11); còn ai tiếp nhận Người thì được quyền trở nên con Thiên Chúa (c. 12). "Ngôi Lời đã hoá thành nhục thể, và Người đã cư ngụ giữa chúng ta" (c. 14).',
    connect: 'Ba Thánh lễ Giáng Sinh đi từ biến cố (lễ Đêm), qua cách đáp lại (lễ Rạng Đông), đến mầu nhiệm sâu xa nhất (lễ Ban Ngày): Hài Nhi chính là Lời vĩnh cửu của Thiên Chúa. I-sai-a loan báo tin mừng; thư Do-thái nói Thiên Chúa đã nói lời trọn vẹn qua Con; Gio-an cho thấy Lời ấy đã thành xác phàm. Thiên Chúa không chỉ nói về mình, Người trao ban chính mình.',
    question: 'Tôi có thật sự "tiếp nhận Người", để Người cư ngụ trong nhà, trong gia đình tôi?',
    action: 'Cùng gia đình đọc lại Tin Mừng Giáng Sinh trước hang đá, và cầu nguyện cho những gia đình không có nhà.'
  },

  // ---------------------------------------------------------------- 27/12/2026 – Thánh Gia năm B
  'T2010-B': {
    theme: 'Gia đình sống bằng đức tin: lời Chúa hứa thành hiện thực qua những bước đi tin tưởng.',
    first: 'Áp-ra-ham than thở với Chúa vì không có con. Chúa đưa ông ra ngoài ngắm sao trời và hứa dòng dõi ông sẽ đông như thế. Áp-ra-ham tin, và vì thế được kể là người công chính (c. 6). Về sau, bà Sa-ra sinh con đúng như lời Chúa đã hứa.',
    psalm: 'Phúc thay những ai kính sợ Chúa: gia đình là nơi phúc lành của Chúa được cảm nhận rõ nhất, trong công việc và trong bữa cơm chung.',
    second: 'Nhờ đức tin, Áp-ra-ham ra đi mà không biết mình đi đâu (c. 8); nhờ đức tin, bà Sa-ra có khả năng làm mẹ; nhờ đức tin, Áp-ra-ham sẵn sàng dâng I-sa-ác, người con duy nhất.',
    gospel: 'Thánh Giu-se và Đức Maria dâng Hài Nhi trong Đền Thờ theo luật Chúa. Ông Si-mê-ôn và bà An-na, hai người cao tuổi trung tín, nhận ra Đấng Cứu Độ. Ông Si-mê-ôn nói về ánh sáng cho muôn dân, và cũng nói về lưỡi gươm sẽ đâm thâu lòng Mẹ (c. 35). Hài Nhi lớn lên, thêm vững mạnh và đầy khôn ngoan (c. 40).',
    connect: 'Áp-ra-ham với Sa-ra, Giu-se với Maria: hai gia đình sống bằng niềm tin vào lời hứa. Bài đọc II cho thấy chìa khóa là đức tin. Gia đình thánh không phải gia đình không có thử thách (lưỡi gươm, những lần ra đi không biết về đâu), mà là gia đình cùng nhau tin cậy Chúa. Ông Si-mê-ôn và bà An-na nhắc ta về vai trò quý giá của ông bà, người cao tuổi.',
    question: 'Gia đình tôi đang chờ một lời hứa nào của Chúa mà chưa thấy thành? Chúng tôi có cùng nhau cầu nguyện và tin cậy Chúa không?',
    action: 'Gọi điện hoặc đến thăm ông bà, cha mẹ già; cả nhà cùng đọc một kinh trước bữa ăn.'
  },

  // ---------------------------------------------------------------- 01/01 – Đức Maria, Mẹ Thiên Chúa (mọi năm)
  'T20101': {
    theme: 'Bước vào năm mới dưới phúc lành của Thiên Chúa, cùng với Mẹ Maria.',
    first: 'Lời chúc lành các tư tế dùng để chúc cho dân: xin Chúa chúc lành và gìn giữ, tỏ nhan thánh rạng ngời và ban bình an (c. 24-26). Như thế, Danh Chúa được đặt trên dân Người (c. 27).',
    psalm: 'Xin Thiên Chúa thương xót và chúc phúc cho chúng ta, xin tỏ thiên nhan rạng ngời trên chúng ta.',
    second: 'Khi thời gian tới hồi viên mãn, Thiên Chúa sai Con mình đến, "sinh hạ bởi người phụ nữ" (c. 4), để chúng ta được nhận làm con và được Thần Trí trong lòng kêu lên: "Áp-ba!", nghĩa là "Lạy Cha!" (c. 6).',
    gospel: 'Các mục đồng tìm gặp Hài Nhi; Đức Maria ghi nhớ mọi sự và suy đi nghĩ lại trong lòng. Đủ tám ngày, Hài Nhi được đặt tên là Giê-su (c. 21), tên này nghĩa là Thiên Chúa cứu độ.',
    connect: 'Sách Dân số nói về Danh Chúa và phúc lành; Tin Mừng kể Hài Nhi nhận Danh Giê-su: chính Người là phúc lành của Thiên Chúa cho nhân loại. Thư Ga-lát nói nhờ Con "sinh hạ bởi người phụ nữ", ta được làm con Thiên Chúa. Đức Maria là Mẹ Thiên Chúa vì đã trao cho Ngôi Lời một thân xác; Mẹ cũng dạy ta đón năm mới bằng cách suy đi nghĩ lại mọi sự trong lòng. Ngày này cũng là Ngày Thế giới Hòa bình.',
    question: 'Năm nay, tôi muốn trao điều gì cho Chúa chúc lành và gìn giữ? Và tôi sẽ trở nên phúc lành cho ai?',
    action: 'Đọc lời chúc lành trong sách Dân số (6, 24-26) cho người thân; cầu nguyện cho hòa bình thế giới.'
  },

  // ---------------------------------------------------------------- Lễ Hiển Linh (bài đọc giống nhau mọi năm)
  'T2030-B': {
    theme: 'Ánh sáng Chúa chiếu soi muôn dân: ai thành tâm tìm kiếm sẽ gặp được Người.',
    first: 'Giê-ru-sa-lem được mời đứng dậy và bừng sáng lên, vì vinh quang Chúa chiếu rọi trên mình. Muôn dân sẽ tìm đến ánh sáng ấy, mang theo vàng và nhũ hương (c. 6).',
    psalm: 'Lạy Chúa, muôn dân nước sẽ thờ lạy Chúa: vị vua công chính chăm lo cho người nghèo khổ.',
    second: 'Mầu nhiệm xưa kia được giữ kín nay đã được mặc khải: các dân ngoại cũng được thừa hưởng gia nghiệp, cùng làm thành một thân thể (c. 6).',
    gospel: 'Các nhà chiêm tinh theo ngôi sao, hỏi đường, tìm kiếm, rồi sấp mình thờ lạy và dâng vàng, nhũ hương, mộc dược (c. 11). Vua Hê-rô-đê và các thượng tế biết Kinh Thánh mà không lên đường; những người ngoại không biết Kinh Thánh lại đi tìm. Sau khi gặp Chúa, họ "đã qua đường khác trở về xứ sở mình" (c. 12).',
    connect: 'I-sai-a báo trước muôn dân sẽ mang vàng và nhũ hương đến; Mát-thêu kể điều ấy thành hiện thực nơi các nhà chiêm tinh; thư Ê-phê-xô giải thích: ơn cứu độ dành cho mọi người, không trừ ai. Hiển Linh nghĩa là Chúa tỏ mình ra cho muôn dân.',
    question: '"Ngôi sao" nào Chúa đang dùng để dẫn tôi đến với Người? Sau khi gặp Chúa, tôi có "qua đường khác", tức là thay đổi cách sống không?',
    action: 'Cầu nguyện và góp phần cho công cuộc truyền giáo; chia sẻ đức tin cách tế nhị với một người chưa biết Chúa.'
  },

  // ---------------------------------------------------------------- 10/01/2027 – Chúa Giê-su chịu phép rửa năm B
  'T5010-B': {
    theme: '"Con là Con yêu dấu của Cha": căn tính của Chúa Giê-su, và của mọi người đã chịu phép rửa.',
    first: 'Người Tôi Trung được Thiên Chúa nâng đỡ và ban Thần Khí. Người không kêu la, không bẻ gãy cây lau bị giập, không dập tắt tim đèn còn khói (c. 2-3). Sứ mạng của Người là mở mắt người mù và giải thoát kẻ bị giam cầm (c. 7).',
    psalm: 'Tiếng Chúa vang trên mặt nước; Chúa chúc phúc cho dân Người được bình an.',
    second: 'Thiên Chúa không thiên vị người nào (c. 34). Đức Giê-su được Thiên Chúa xức dầu bằng Thánh Thần và quyền năng, rồi đi khắp nơi thi ân giáng phúc (c. 38).',
    gospel: 'Gioan loan báo Đấng sẽ làm phép rửa trong Thánh Thần. Khi Chúa Giê-su lên khỏi nước, trời mở ra, Thần Khí ngự xuống trên Người, và có tiếng từ trời: Con là Con yêu dấu của Cha (c. 10-11).',
    connect: 'I-sai-a giới thiệu Người Tôi Trung được Thiên Chúa chọn và ban Thần Khí; tiếng nói từ trời trong Tin Mừng vang lại chính lời ấy. Sách Công vụ tóm lại: sau phép rửa, Đức Giê-su đi khắp nơi làm ơn. Được yêu thương trước, rồi mới được sai đi. Lễ này khép lại Mùa Giáng Sinh, và đáp lại lời khẩn cầu của Chúa Nhật I Mùa Vọng xin Chúa "ngự xuống": nay trời đã mở ra.',
    question: 'Tôi có tin mình là con yêu dấu của Cha ngay cả trước khi làm được điều gì không? Tôi có nhẹ nhàng như Người Tôi Trung với những "cây lau bị giập" quanh mình?',
    action: 'Tìm lại ngày mình được rửa tội và tạ ơn Chúa; đối xử nhẹ nhàng với một người đang yếu đuối.'
  },

  // ---------------------------------------------------------------- 17/01/2027 – CN II Thường Niên năm B
  'T5020-B': {
    theme: 'Chúa gọi mỗi người bằng tên: lắng nghe, đến xem, rồi ở lại với Người.',
    first: 'Cậu bé Sa-mu-en nghe gọi ba lần mà chưa nhận ra tiếng Chúa, cho đến khi thầy Ê-li giúp cậu biết cách đáp lời: "Lạy Chúa, xin hãy nói, vì tôi tớ Chúa đang nghe" (c. 10). Nhận ra tiếng Chúa thường cần thời gian, và cần một người đồng hành.',
    psalm: '"Lạy Chúa, này con xin đến để thực thi ý Chúa": lời đáp của người đã nghe được tiếng gọi.',
    second: 'Thân xác không phải đồ vật để thỏa mãn, mà là "đền thờ Chúa Thánh Thần" (c. 19). Anh em đã được mua chuộc bằng giá rất đắt, nên "hãy tôn vinh Chúa trong thân xác anh em" (c. 20).',
    gospel: 'Lời đầu tiên Chúa Giê-su nói trong Tin Mừng Gio-an là một câu hỏi: "Các ngươi tìm gì?" (c. 38). Người không giảng giải, chỉ mời: "Hãy đến mà xem" (c. 39). Hai môn đệ ở lại với Người, rồi An-rê đi gọi anh mình: "Chúng tôi đã gặp Đấng Mê-si-a" (c. 41). Ơn gọi lan ra từ người này sang người khác.',
    connect: 'Bài đọc I và Tin Mừng là hai câu chuyện ơn gọi: Sa-mu-en cần Ê-li để nhận ra tiếng Chúa; hai môn đệ cần Gio-an chỉ cho biết "Đây là Chiên Thiên Chúa"; Phê-rô cần An-rê dẫn đến với Chúa. Không ai tự mình tìm ra Chúa. Bài đọc II được đọc liên tục theo thư Cô-rin-tô, nhưng nhắc rằng đáp lời Chúa là đáp bằng cả con người, kể cả thân xác.',
    question: 'Tôi đang thật sự "tìm gì"? Ai đã là Ê-li hay An-rê dẫn tôi đến với Chúa, và tôi có thể làm điều đó cho ai?',
    action: 'Dành năm phút thinh lặng, lặp lại lời Sa-mu-en: "Lạy Chúa, xin hãy nói, vì tôi tớ Chúa đang nghe".'
  },

  // ---------------------------------------------------------------- 24/01/2027 – CN III Thường Niên năm B
  'T5030-B': {
    theme: 'Thời giờ đã mãn: hôm nay là lúc hoán cải và đi theo Chúa.',
    first: 'Giô-na rao giảng ở Ni-ni-vê chỉ một ngày, và cả thành, từ người lớn đến trẻ nhỏ, đều ăn năn. "Chúa thấy việc họ làm, vì họ bỏ đời sống xấu xa" nên không phạt họ (c. 10). Lòng thương xót của Thiên Chúa rộng hơn mọi dự đoán của con người, kể cả của chính vị ngôn sứ.',
    psalm: '"Lạy Chúa, xin dạy bảo con về lối bước của Ngài": hoán cải là để Chúa chỉ đường cho mình.',
    second: '"Thời giờ vắn vỏi" (c. 29), vì "bộ mặt thế gian này đang qua đi" (c. 31). Thánh Phao-lô không bảo khinh chê đời sống, mà mời ta sống mọi sự với một khoảng tự do nội tâm, không để điều gì trói buộc mình.',
    gospel: 'Lời rao giảng đầu tiên của Chúa Giê-su: "Thời giờ đã mãn và nước Thiên Chúa đã gần đến; anh em hãy ăn năn sám hối và tin vào Phúc Âm" (c. 15). Rồi Người gọi các ngư phủ: "Hãy theo Ta, Ta sẽ làm cho các ngươi trở thành những kẻ chài lưới người" (c. 17). "Lập tức các ông bỏ lưới theo Người" (c. 18).',
    connect: 'Ba bài đọc cùng nói về sự cấp bách: Ni-ni-vê chỉ còn bốn mươi ngày; thế gian đang qua đi; nước Thiên Chúa đã gần đến. Nhưng sự cấp bách ấy không nhằm gieo sợ hãi, mà mở ra lòng thương xót: dân Ni-ni-vê được tha, các ngư phủ được gọi vào một đời sống mới. Hoán cải không chỉ là bỏ điều xấu, mà là đi theo một Người.',
    question: 'Chiếc lưới nào tôi còn nắm chặt khiến tôi chưa dám theo Chúa trọn vẹn?',
    action: 'Chọn một thói quen xấu và bỏ ngay hôm nay, đừng hẹn đến mai.'
  },

  // ---------------------------------------------------------------- 25/01 – Thánh Phao-lô Tông đồ trở lại (mọi năm)
  'S72501': {
    theme: 'Gặp Chúa Phục Sinh đổi một người bắt đạo thành vị Tông Đồ.',
    first: 'Phao-lô kể lại đời mình: từng nhiệt thành với lề luật đến mức bắt bớ các Kitô hữu. Trên đường Đa-mát, ánh sáng từ trời làm ông ngã xuống, và ông nghe: "Saolô, Saolô, sao ngươi bắt bớ Ta?" (c. 7). Chúa đồng hóa mình với những người bị bắt bớ: "Ta là Giêsu Nadarét mà ngươi đang bắt bớ" (c. 8). Phao-lô chỉ còn biết hỏi: "Lạy Chúa, con phải làm gì?" (c. 10).',
    psalm: '"Hãy đi rao giảng Tin Mừng khắp thế gian": người được biến đổi trở thành người được sai đi.',
    gospel: 'Chúa Phục Sinh sai các môn đệ: "Các con hãy đi khắp thế gian, rao giảng Tin Mừng cho mọi tạo vật" (c. 15). Những dấu lạ đi kèm cho thấy chính Chúa hoạt động cùng những người Người sai đi.',
    connect: 'Bài đọc I kể Phao-lô được biến đổi; Tin Mừng nói về sứ mạng Phao-lô sẽ nhận: rao giảng cho muôn dân. Ông không trở lại nhờ lý lẽ, mà nhờ gặp chính Đức Giê-su. Ông cũng cần cả một cộng đoàn (ông A-na-ni-a, những người bạn dắt ông vào thành) để bước tiếp. Ngày này cũng khép lại Tuần Cầu nguyện cho các Kitô hữu hiệp nhất.',
    question: 'Có điều gì trong tôi cần được Chúa làm cho ngã xuống như Phao-lô, để tôi nhìn lại? Tôi có dám hỏi Chúa: "con phải làm gì?"',
    action: 'Cầu nguyện cho sự hiệp nhất các Kitô hữu, và cho một người mình thấy khó tin là sẽ đến với Chúa.'
  },

  // ---------------------------------------------------------------- 31/01/2027 – CN IV Thường Niên năm B
  'T5040-B': {
    theme: 'Lời Chúa Giê-su có uy quyền vì Người là Lời của Thiên Chúa, và Lời ấy giải phóng.',
    first: 'Mô-sê hứa Thiên Chúa sẽ gầy dựng "một tiên tri như ta" (c. 15), và Người sẽ "đặt vào miệng người những lời của Ta" (c. 18). Dân sợ nghe trực tiếp tiếng Chúa, nên Chúa nói với họ qua một con người.',
    psalm: '"Ước chi hôm nay các bạn nghe tiếng Người: các bạn đừng cứng lòng." Nghe Lời Chúa luôn là chuyện của "hôm nay".',
    second: 'Thánh Phao-lô mong anh em "khỏi phải lo lắng" (c. 32), để có thể gắn bó với Chúa mà không bị chia lòng. Dù sống bậc nào, câu hỏi vẫn là: điều gì đang chiếm hết lòng trí tôi?',
    gospel: 'Tại hội đường Ca-phác-na-um, người ta kinh ngạc vì Chúa Giê-su giảng dạy "như Đấng có uy quyền, chứ không như các luật sĩ" (c. 22). Uy quyền ấy không chỉ ở lời nói hay: một lời truyền của Người giải thoát người bị thần ô uế ám. Ngay cả thần dữ cũng nhận ra Người là "Đấng Thánh của Thiên Chúa" (c. 24).',
    connect: 'Lời hứa của Mô-sê về một ngôn sứ mang lời Thiên Chúa thành hiện thực nơi Chúa Giê-su: Người không chỉ nói lời Thiên Chúa, Người chính là Lời ấy, nên lời Người có sức giải phóng. Thánh vịnh đặt câu hỏi cho ta: có nghe mà không cứng lòng không? Bài đọc II (đọc liên tục thư Cô-rin-tô) nhắc rằng một tâm hồn bị chia lòng khó lắng nghe.',
    question: 'Điều gì đang "ám" tôi, khiến tôi không được tự do: một nỗi sợ, một thói nghiện, một mối hận? Tôi có để Lời Chúa nói với điều đó không?',
    action: 'Đọc lại bài Tin Mừng hôm nay một lần nữa, chậm rãi, và để ý câu nào chạm đến mình nhất.'
  },

  // ---------------------------------------------------------------- 02/02 – Dâng Chúa Giê-su trong Đền Thánh (mọi năm)
  'S70202': {
    theme: 'Chúa đến Đền Thờ: ánh sáng chiếu soi muôn dân trên cánh tay một cụ già.',
    first: 'Ngôn sứ Ma-la-khi loan báo: "Này đây Người đến" (c. 1). Chúa sẽ vào đền thánh Người, nhưng sự hiện diện ấy có sức thanh luyện "như lửa thiêu đốt" (c. 2), để lễ tế dâng lên được đẹp lòng Thiên Chúa.',
    psalm: '"Vua hiển vinh là ai vậy?" Các cửa đền thờ được mời mở rộng. Câu trả lời bất ngờ: vị Vua ấy vào Đền Thờ trong vòng tay cha mẹ nghèo.',
    second: 'Chúa Giê-su "nên giống anh em Mình mọi đàng" (c. 17), cùng chung thân phận máu thịt, để giải thoát những ai vì sợ chết mà làm nô lệ suốt đời (c. 14-15).',
    gospel: 'Đức Maria và Thánh Giu-se dâng Con theo luật, với lễ vật của người nghèo: một cặp bồ câu. Ông Si-mê-ôn, người công chính đang chờ niềm ủi an của Ít-ra-en, bồng Hài Nhi và chúc tụng: "Lạy Chúa, giờ đây, Chúa để cho tôi tớ Chúa ra đi bình an" (c. 29), vì đã thấy "Ánh sáng chiếu soi các lương dân" (c. 32).',
    connect: 'Ma-la-khi báo Chúa sẽ vào đền thánh; Tin Mừng cho thấy Người vào thật, nhưng dưới hình một Hài Nhi được dâng lên. Thư Do-thái giải thích vì sao: Người trở nên giống ta mọi đàng để cứu ta. Lễ này còn gọi là Lễ Nến: nến được làm phép nhắc ta Đức Kitô là ánh sáng. Đây cũng là Ngày Đời sống Thánh hiến.',
    question: 'Như ông Si-mê-ôn, tôi có kiên nhẫn chờ Chúa trong cầu nguyện, để đủ nhạy bén nhận ra Người khi Người đến?',
    action: 'Cầu nguyện cho các tu sĩ nam nữ; nếu được, tham dự nghi thức làm phép nến và mang nến về thắp khi gia đình cầu nguyện.'
  },

  // ---------------------------------------------------------------- Mùng Một Tết (mọi năm)
  'S70001': {
    theme: 'Năm mới trong tay Chúa: tìm Nước Thiên Chúa trước, và đừng lo lắng.',
    first: 'Thiên Chúa dựng nên mặt trời, mặt trăng, các tinh tú làm "dấu chỉ thời gian, ngày và năm tháng" (c. 14). Thời gian là quà tặng của Đấng Tạo Hóa, và "Thiên Chúa thấy tốt đẹp" (c. 18).',
    psalm: '"Lạy Chúa, xin Ngài củng cố sự nghiệp tay chúng tôi làm ra": lời cầu đầu năm cho công việc và mọi dự định.',
    second: '"Anh em hãy vui luôn trong niềm vui của Chúa" (c. 4). "Anh em đừng lo lắng gì cả", nhưng hãy giãi bày mọi điều với Thiên Chúa trong lời cầu xin và tạ ơn (c. 6), và bình an của Người sẽ giữ lòng trí anh em (c. 7).',
    gospel: 'Hãy nhìn chim trời, hãy ngắm hoa huệ ngoài đồng: Cha trên trời nuôi nấng và mặc đẹp cho chúng. "Tiên vàn các con hãy tìm kiếm nước Thiên Chúa và sự công chính của Người, còn các điều đó Người sẽ ban thêm cho các con" (c. 33). Và "ngày mai sẽ lo cho ngày mai" (c. 34).',
    connect: 'Sách Sáng thế cho thấy thời gian thuộc về Thiên Chúa; thư Phi-líp-phê và Tin Mừng cùng một lời mời: đừng lo lắng, hãy tín thác. Ngày đầu năm, người Việt thường chúc nhau phúc lộc và may mắn. Lời Chúa không phủ nhận những ước mong ấy, nhưng xếp chúng vào đúng chỗ: tìm Nước Thiên Chúa trước, mọi sự khác Người sẽ ban thêm.',
    question: 'Trong năm mới này, tôi lo lắng nhất về điều gì? Tôi có dám đặt điều đó vào tay Chúa?',
    action: 'Cả nhà cùng dâng năm mới cho Chúa bằng một lời cầu nguyện chung trước khi đi chúc Tết; mừng tuổi kèm một lời chúc lành.'
  },

  // ---------------------------------------------------------------- Mùng Hai Tết – kính nhớ Tổ Tiên (mọi năm)
  'S70002': {
    theme: 'Uống nước nhớ nguồn: tạ ơn Chúa vì tổ tiên, và tiếp nối đức tin cho con cháu.',
    first: '"Chúng ta hãy ca ngợi những vị danh nhân, cũng là cha ông của chúng ta qua các thế hệ" (c. 1). Những người đạo hạnh ấy có thể không nổi tiếng, nhưng "công đức của các ngài không chìm vào quên lãng" (c. 10), và con cháu được hưởng gia tài của các ngài.',
    psalm: '"Hạnh phúc thay bạn nào kính sợ Chúa, ăn ở theo đường lối của Người": phúc lành truyền từ đời cha mẹ sang đời con cái.',
    second: 'Con cái "hãy tôn kính cha mẹ" (c. 2), điều răn có kèm lời hứa. Cha mẹ đừng làm con cái tức giận, nhưng giáo dục chúng thay mặt Chúa (c. 4). Lòng hiếu thảo là con đường hai chiều.',
    gospel: 'Ông Da-ca-ri-a chúc tụng Thiên Chúa vì Người đã "nhớ lại lời thánh ước của Người" với tổ phụ Áp-ra-ham (c. 72). Thiên Chúa là Đấng nhớ: Người trung thành với lời hứa qua mọi thế hệ.',
    connect: 'Bài đọc I ca ngợi cha ông; Thánh vịnh và thư Ê-phê-xô nói về phúc lành trong gia đình; Tin Mừng cho thấy chính Thiên Chúa cũng "nhớ" tổ tiên. Truyền thống hiếu thảo của người Việt gặp gỡ Lời Chúa: nhớ ơn tổ tiên là một cách tạ ơn Thiên Chúa, Đấng ban sự sống qua các thế hệ.',
    question: 'Tôi đã nhận được gì từ ông bà cha mẹ, nhất là về đức tin? Tôi đang để lại gì cho thế hệ sau?',
    action: 'Viếng mộ hoặc cầu nguyện cho ông bà tổ tiên; kể cho con cháu nghe một kỷ niệm về đức tin của ông bà.'
  },

  // ---------------------------------------------------------------- Mùng Ba Tết – thánh hóa công ăn việc làm (mọi năm)
  'S70003': {
    theme: 'Lao động là cộng tác với Thiên Chúa, Đấng vẫn làm việc không ngừng.',
    first: 'Thiên Chúa nắn con người từ bùn đất và thổi sinh khí vào (c. 7), rồi đặt con người vào vườn "để họ trồng tỉa và coi sóc vườn" (c. 15). Ngay từ đầu, lao động đã là một phần của ơn gọi làm người, không phải hình phạt.',
    psalm: '"Lạy Chúa là Thiên Chúa con thờ, Chúa muôn trùng cao cả!" Thánh vịnh ca ngợi Chúa qua công trình tạo dựng, nơi con người ra đi làm lụng cho đến chiều tối.',
    second: 'Thánh Phao-lô làm việc bằng đôi tay để tự nuôi mình và giúp người yếu đuối. Ông nhắc lời Chúa Giê-su: "cho thì có phúc hơn là nhận" (c. 35).',
    gospel: '"Cha Ta làm việc liên lỉ, Ta cũng làm việc như vậy" (c. 17). Thiên Chúa không phải là Đấng ngồi yên; Người tiếp tục chăm sóc và chữa lành. Chúa Con làm điều Người thấy Chúa Cha làm.',
    connect: 'Sách Sáng thế cho thấy Thiên Chúa trao cho con người công việc chăm sóc trái đất; Tin Mừng nói chính Thiên Chúa vẫn làm việc; Công vụ cho thấy lao động không chỉ để làm giàu mà còn để chia sẻ. Ngày đầu năm làm việc, ta xin Chúa thánh hóa công việc: làm với lương tâm, vì người khác, và trong tình hiệp thông với Chúa.',
    question: 'Công việc của tôi có đang giúp tôi cộng tác với Chúa và phục vụ người khác, hay chỉ còn là chạy theo lợi nhuận?',
    action: 'Trước khi bắt đầu công việc đầu năm, dâng công việc cho Chúa bằng một lời cầu ngắn; dành một phần thu nhập đầu năm giúp người nghèo.'
  },

  // ---------------------------------------------------------------- 07/02/2027 – CN V Thường Niên năm B (trùng Mùng Hai Tết)
  'T5050-B': {
    theme: 'Chúa cầm tay nâng ta dậy, và Người tìm sức mạnh trong cầu nguyện.',
    first: 'Ông Gióp nói lên nỗi khổ của con người không chút che giấu: "Ngày của tôi qua nhanh hơn chiếc thoi đưa" (c. 6), "đời sống tôi chỉ là một hơi thở" (c. 7). Lời Chúa không cấm ta than thở; Kinh Thánh cho nỗi đau một tiếng nói.',
    psalm: '"Hãy chúc tụng Chúa, Đấng cứu chữa những kẻ giập nát tâm can": lời đáp cho tiếng than của Gióp.',
    second: '"Vô phúc cho tôi, nếu tôi không rao giảng Tin Mừng" (c. 16). Thánh Phao-lô tự nguyện làm nô lệ mọi người, nên mọi sự cho mọi người, để cứu được một số người.',
    gospel: 'Tại nhà ông Si-mon, Chúa Giê-su đến bên bà mẹ vợ đang sốt: "Người cầm tay bà, và nâng đỡ dậy" (c. 31), và bà liền phục vụ mọi người. Chiều đến, cả thành tụ họp trước cửa. "Sáng sớm tinh sương", Người ra nơi thanh vắng cầu nguyện (c. 35). Khi các môn đệ báo "Mọi người đều đi tìm Thầy", Người lại ra đi đến các làng khác (c. 37-38).',
    connect: 'Gióp kêu lên nỗi khổ của con người; Thánh vịnh hứa Chúa chữa lành; Tin Mừng cho thấy lời hứa thành hiện thực nơi những cử chỉ rất gần gũi của Chúa Giê-su. Người bận rộn nhưng không bị cuốn đi: Người cầu nguyện, rồi tự do lên đường. Bài đọc II (đọc liên tục thư Cô-rin-tô) cho thấy Phao-lô cũng bị thôi thúc như thế.',
    question: 'Ai quanh tôi đang ngã quỵ, cần một bàn tay nâng dậy? Tôi có giữ được giờ cầu nguyện giữa những bận rộn?',
    action: 'Thăm hoặc gọi điện cho một người đau ốm; dậy sớm hơn mười phút để cầu nguyện trước khi bắt đầu ngày mới.'
  },

  // ---------------------------------------------------------------- Thứ Tư Lễ Tro (mọi năm)
  'T3004': {
    theme: 'Hãy trở về với Chúa bằng cả tấm lòng: Mùa Chay là thời gian thuận tiện.',
    first: '"Hãy thật lòng trở về với Ta" (c. 12). "Hãy xé tâm hồn, chớ đừng xé áo các ngươi" (c. 13): điều Chúa muốn không phải là nghi thức bên ngoài, mà một tấm lòng đổi mới. Lý do để trở về là chính Thiên Chúa: Người "nhân lành và từ bi, nhẫn nại, giầu lòng thương xót" (c. 13).',
    psalm: '"Lạy Chúa, nguyện thương con theo lòng nhân hậu Chúa": lời của vua Đa-vít sau khi phạm tội, trở thành lời cầu của cả Hội Thánh.',
    second: '"Hãy làm hoà cùng Thiên Chúa" (5, 20). "Dịp thuận tiện đến rồi" (6, 2): không phải ngày mai, mà là bây giờ.',
    gospel: 'Ba việc đạo đức của Mùa Chay: bố thí, cầu nguyện, ăn chay. Chúa Giê-su không bỏ chúng, nhưng thay đổi động cơ: làm trong âm thầm, không để được khen, vì "Cha con, Đấng thấu suốt mọi bí ẩn, sẽ trả công cho con" (c. 4).',
    connect: 'Giô-en kêu gọi cả dân trở về; Phao-lô nói đây là lúc thuận tiện; Tin Mừng chỉ cách sống: bố thí là trở về với người khác, cầu nguyện là trở về với Chúa, ăn chay là trở về với chính mình. Tro rắc trên đầu nhắc ta mình là bụi tro, nhưng là bụi tro được Thiên Chúa yêu thương.',
    question: 'Mùa Chay này, tôi muốn "xé tâm hồn" mình ở điểm nào cụ thể, thay vì chỉ làm những việc bên ngoài?',
    action: 'Chọn một việc cụ thể cho cả Mùa Chay ở mỗi chiều kích: một việc bác ái, một giờ cầu nguyện, một điều hãm mình, và giữ kín không kể với ai.'
  },

  // ---------------------------------------------------------------- 14/02/2027 – CN I Mùa Chay năm B
  'T3010-B': {
    theme: 'Vào hoang địa với Chúa Giê-su: nơi thử thách cũng là nơi giao ước được canh tân.',
    first: 'Sau lụt hồng thủy, Thiên Chúa ký kết giao ước với ông Nô-ê và mọi sinh vật: nước lụt sẽ không còn hủy diệt trái đất. Dấu chỉ là chiếc cầu vồng, "một cái mống" đặt trên trời (c. 13). Thiên Chúa tự ràng buộc mình bằng lời hứa.',
    psalm: '"Tất cả đường nẻo Chúa là ân sủng và trung thành dành cho những ai giữ minh ước và điều răn Chúa."',
    second: '"Chúa Kitô đã chết một lần cho tội lỗi chúng ta" (c. 18). Nước lụt thời Nô-ê là hình ảnh báo trước phép thánh tẩy, nhờ đó ta được cứu thoát (c. 21).',
    gospel: '"Thánh Thần thúc đẩy Chúa Giêsu vào hoang địa" (c. 12). Mác-cô kể rất ngắn: bốn mươi ngày, chịu Satan cám dỗ, "sống chung với dã thú và các Thiên Thần hầu hạ Người" (c. 13). Rồi Người bắt đầu rao giảng: "anh em hãy ăn năn sám hối và tin vào Tin Mừng" (c. 15).',
    connect: 'Giao ước với Nô-ê qua nước lụt, phép thánh tẩy qua nước trong thư Phê-rô, và Chúa Giê-su vừa chịu phép rửa đã vào hoang địa: Mùa Chay là thời gian ta sống lại ơn bí tích Rửa Tội, chuẩn bị cho đêm Phục Sinh. Hoang địa là nơi thử thách, nhưng cũng là nơi Thiên Chúa gìn giữ (các thiên thần hầu hạ) và canh tân giao ước.',
    question: '"Hoang địa" của tôi trong Mùa Chay này là gì: một khoảng thinh lặng, một sự từ bỏ? Tôi đang bị cám dỗ nhiều nhất ở đâu?',
    action: 'Tìm hiểu lại lời hứa khi chịu phép Rửa Tội (từ bỏ ma quỷ, tuyên xưng đức tin) và đọc lại mỗi tuần trong Mùa Chay.'
  },

  // ---------------------------------------------------------------- 21/02/2027 – CN II Mùa Chay năm B
  'T3020-B': {
    theme: 'Trên núi, Chúa cho thấy vinh quang để ta đủ sức theo Người xuống núi, đi về thập giá.',
    first: 'Chúa thử Áp-ra-ham bằng điều khó nhất: dâng "đứa con một yêu dấu" của mình (c. 2). Ông vẫn đáp: "Dạ, con đây" (c. 1). Vào giây phút cuối, Chúa ngăn tay ông lại. Thiên Chúa không muốn hy tế con người; Người muốn một lòng tin dám trao tất cả.',
    psalm: '"Tôi sẽ tiến đi trước thiên nhan Chúa trong miền đất của nhân sinh": vẫn bước đi trong niềm tin, ngay cả giữa thử thách.',
    second: '"Nếu Thiên Chúa ủng hộ chúng ta, thì ai có thể chống lại chúng ta?" (c. 31). Điều Áp-ra-ham được miễn, Thiên Chúa lại làm: "Người không dung tha chính Con mình" (c. 32).',
    gospel: 'Chúa Giê-su biến hình trước mặt ba môn đệ, áo Người "trắng tinh như tuyết". Phê-rô muốn dựng lều để ở lại mãi. Nhưng tiếng từ đám mây chỉ nói một điều: "Đây là Con Ta rất yêu dấu, các ngươi hãy nghe lời Người". Rồi các ông chỉ còn thấy "một mình Chúa Giê-su", và cùng Người xuống núi.',
    connect: 'Áp-ra-ham lên núi dâng người con yêu dấu; trên núi Biến Hình, Chúa Cha giới thiệu "Con Ta rất yêu dấu"; thư Rô-ma nói Thiên Chúa đã không tiếc chính Con mình. Điều Áp-ra-ham được tha, Thiên Chúa đã làm cho ta. Vinh quang trên núi không phải để ở lại, mà để thêm sức đi qua thập giá.',
    question: 'I-sa-ác của tôi là gì, điều tôi quý nhất và khó trao cho Chúa nhất? Tôi có đang muốn dựng lều ở những khoảnh khắc dễ chịu thay vì theo Chúa xuống núi?',
    action: 'Trong tuần này, dành một khoảng thời gian chỉ để "nghe lời Người": đọc chậm một đoạn Tin Mừng, không làm gì khác.'
  },

  // ---------------------------------------------------------------- 22/02 – Lập Tông Tòa Thánh Phê-rô (mọi năm)
  'S72202': {
    theme: '"Phần các con, các con bảo Thầy là ai?": đức tin của Phê-rô là nền cho Hội Thánh.',
    first: 'Thánh Phê-rô, một "nhân chứng cuộc khổ hình" của Chúa (c. 1), khuyên các mục tử chăn dắt đoàn chiên không miễn cưỡng, không trục lợi, không "như người chuyên chế lộng hành, nhưng phải nên gương sáng cho đoàn chiên" (c. 3).',
    psalm: '"Chúa chăn nuôi tôi, tôi chẳng thiếu thốn chi": mọi mục tử trong Hội Thánh chỉ là hình ảnh của Mục Tử duy nhất.',
    gospel: 'Sau khi nghe dư luận, Chúa Giê-su hỏi thẳng: "Phần các con, các con bảo Thầy là ai?" (c. 15). Phê-rô thưa: "Thầy là Đức Kitô, Con Thiên Chúa hằng sống" (c. 16). Lời tuyên xưng ấy không do "xác thịt máu huyết", mà do Chúa Cha mạc khải (c. 17), và trên nền đá ấy Chúa xây Hội Thánh (c. 18).',
    connect: 'Tin Mừng cho thấy Phê-rô được trao sứ mạng; thư Phê-rô cho thấy chính ông hiểu sứ mạng ấy là phục vụ, nên gương sáng, không cai trị. Tông Tòa (ngai tòa) của Phê-rô là một quyền bính thật Chúa trao, như hình ảnh chìa khóa nước trời, nhưng là quyền bính để phục vụ: giữ gìn đức tin, củng cố anh em và làm nền tảng hữu hình cho sự hiệp nhất của Hội Thánh.',
    question: 'Nếu hôm nay Chúa hỏi tôi: "con bảo Thầy là ai?", tôi sẽ trả lời bằng lời của chính mình thế nào?',
    action: 'Cầu nguyện cho Đức Giáo hoàng và các vị mục tử trong giáo phận, giáo xứ của mình.'
  },

  // ---------------------------------------------------------------- 28/02/2027 – CN III Mùa Chay năm B
  'T3030-B': {
    theme: 'Thanh tẩy đền thờ: Chúa muốn chính ta là nhà của Thiên Chúa.',
    first: 'Mười Điều Răn bắt đầu bằng lời nhắc: "Ta là Thiên Chúa ngươi, Đấng đã dẫn dắt ngươi ra khỏi vùng Ai-cập, khỏi nhà nô lệ" (c. 2). Lề luật không phải xiềng xích, mà là con đường để sống tự do của người đã được giải phóng.',
    psalm: '"Lạy Chúa, Chúa có lời ban sự sống đời đời": Lề luật của Chúa làm vui lòng và sáng mắt.',
    second: 'Người ta đòi dấu lạ và tìm khôn ngoan, còn "chúng tôi rao giảng Chúa Kitô chịu đóng đinh trên thập giá" (c. 23), điều xem ra điên rồ nhưng là "quyền năng của Thiên Chúa và sự khôn ngoan của Chúa Cha" (c. 24).',
    gospel: 'Chúa Giê-su đánh đuổi những người buôn bán khỏi Đền Thờ: "đừng làm nhà Cha Ta thành nơi buôn bán" (c. 16). Người nói: "Các ông cứ phá huỷ đền thờ này đi, nội trong ba ngày Ta sẽ dựng lại" (c. 19), và Người "có ý nói đền thờ là thân thể Người" (c. 21).',
    connect: 'Mười Điều Răn dạy thờ phượng Thiên Chúa thật; Chúa Giê-su thanh tẩy Đền Thờ khỏi sự buôn bán; thư Cô-rin-tô chỉ ra đền thờ mới là Đức Kitô chịu đóng đinh và sống lại. Mùa Chay mời ta để Chúa dọn dẹp đền thờ lòng mình, nơi đôi khi cũng biến thành chỗ mặc cả với Chúa.',
    question: 'Trong "đền thờ" lòng tôi, có những bàn đổi tiền nào: đạo đức kiểu đổi chác, những điều chiếm chỗ của Chúa?',
    action: 'Xét mình theo Mười Điều Răn và chuẩn bị xưng tội trong Mùa Chay.'
  },

  // ---------------------------------------------------------------- 07/03/2027 – CN IV Mùa Chay năm B (Laetare)
  'T3040-B': {
    theme: 'Thiên Chúa yêu thế gian đến nỗi ban Con Một: ai tin thì được sống.',
    first: 'Dân Chúa bất trung, coi thường các sứ giả Chúa sai đến, và phải đi lưu đày Ba-by-lon. Nhưng câu chuyện không kết thúc ở đó: Thiên Chúa dùng vua Ky-rô nước Ba-tư mở đường cho dân trở về. Ngay cả khi dân bất trung, Thiên Chúa vẫn trung tín.',
    psalm: '"Lưỡi tôi dính vào cuống họng, nếu tôi không nhớ đến ngươi": nỗi nhớ quê hương của người lưu đày, như nỗi nhớ Thiên Chúa của tâm hồn xa Người.',
    second: 'Thiên Chúa "giàu lòng từ bi" (c. 4): khi ta chết vì tội lỗi, Người làm cho ta sống lại trong Đức Kitô. Ta được cứu nhờ ân sủng, nhờ đức tin, chứ không do công sức riêng.',
    gospel: '"Vì Thiên Chúa đã yêu thế gian đến nỗi đã ban Con Một mình, để tất cả những ai tin Con Ngài thì không phải hư mất, nhưng được sống đời đời" (c. 16). Con được sai đến không phải để luận phạt, nhưng để cứu độ (c. 17). Chỉ có một điều đáng sợ: "người đời đã yêu sự tối tăm hơn sự sáng" (c. 19).',
    connect: 'Biên niên sử kể dân bất trung mà Thiên Chúa vẫn thương; thư Ê-phê-xô nói Người giàu lòng từ bi, cứu ta nhờ ân sủng; Tin Mừng gom tất cả vào một câu: Thiên Chúa yêu thế gian đến nỗi ban Con Một. Chúa Nhật giữa Mùa Chay này được gọi là Chúa Nhật vui mừng: lý do để vui là tình yêu ấy.',
    question: 'Có vùng "tối tăm" nào trong đời tôi mà tôi còn ngại đưa ra ánh sáng của Chúa?',
    action: 'Đọc thuộc lòng câu Ga 3, 16 và lặp lại mỗi khi thấy mình nặng nề hay mặc cảm.'
  },

  // ---------------------------------------------------------------- 14/03/2027 – CN V Mùa Chay năm B
  'T3050-B': {
    theme: 'Hạt lúa mì gieo vào lòng đất: sự sống đến qua sự hiến dâng.',
    first: 'Thiên Chúa hứa một giao ước mới: "Ta sẽ đặt lề luật của Ta trong đáy lòng chúng, và sẽ ghi trong tâm hồn chúng" (c. 33). Không còn là luật khắc trên đá, mà là tình yêu khắc trong tim, và Người "sẽ không còn nhớ đến tội lỗi của chúng" (c. 34).',
    psalm: '"Ôi lạy Chúa, xin tạo cho con quả tim trong sạch": lời cầu của người mong được giao ước mới.',
    second: 'Chúa Kitô "đã lớn tiếng và rơi lệ dâng lời cầu xin" (c. 7). "Dầu là Con Thiên Chúa, Người đã học vâng phục do những đau khổ Người chịu" (c. 8). Chúa không đi qua đau khổ như người dửng dưng.',
    gospel: 'Mấy người Hy-lạp nói: "Thưa ngài, chúng tôi muốn gặp Đức Giê-su" (c. 21). Chúa trả lời bằng hình ảnh hạt lúa: "Nếu hạt lúa mì rơi xuống đất mà không thối đi, thì nó chỉ trơ trọi một mình; nhưng nếu nó thối đi, thì nó sinh nhiều bông hạt" (c. 24). Người cũng xao xuyến trước giờ của mình, nhưng vẫn thưa: "Lạy Cha, xin hãy làm vinh danh Cha" (c. 28).',
    connect: 'Giê-rê-mi-a hứa giao ước mới ghi trong lòng; thư Do-thái và Tin Mừng cho thấy giao ước ấy được ký bằng chính sự hiến dâng của Chúa Giê-su, với cả nước mắt và xao xuyến. Muốn "gặp Đức Giê-su", ta phải nhìn vào hạt lúa mì gieo xuống đất: thập giá sắp đến.',
    question: 'Điều gì trong tôi cần chết đi như hạt lúa, để sinh hoa trái cho người khác?',
    action: 'Làm một việc hy sinh âm thầm cho một người trong gia đình, không mong được đáp lại.'
  },

  // ---------------------------------------------------------------- 19/03 – Thánh Giu-se (mọi năm)
  'S71903': {
    theme: 'Người công chính thinh lặng: Thánh Giu-se tin và làm theo lời Chúa.',
    first: 'Thiên Chúa hứa với Đa-vít: "Ta sẽ là Cha của người, và người sẽ là con Ta" (c. 14), và triều đại sẽ vững bền muôn đời. Thánh Giu-se, "con vua Đa-vít", là mắt xích nối lời hứa ấy với Chúa Giê-su.',
    psalm: '"Miêu duệ người tồn tại đến muôn đời": lời hứa với Đa-vít thành hiện thực qua gia đình Na-da-rét.',
    second: 'Lời hứa được ban "nhờ sự công chính của đức tin" (c. 13). Như Áp-ra-ham tin vào Đấng "cho kẻ chết sống lại" (c. 17), Thánh Giu-se tin vào điều vượt quá hiểu biết của mình.',
    gospel: 'Giu-se "là người công chính, không muốn tố cáo bà" (c. 19): sự công chính của ông đi kèm lòng nhân hậu. Khi được sứ thần bảo: "đừng ngại nhận Ma-ri-a về nhà làm bạn mình" (c. 20), ông không nói một lời nào. Tin Mừng chỉ ghi: "Giu-se đã thực hiện như lời Thiên thần Chúa truyền" (c. 24).',
    connect: 'Lời hứa với Đa-vít và đức tin của Áp-ra-ham gặp nhau nơi Thánh Giu-se: một người thuộc dòng dõi Đa-vít, sống bằng đức tin như Áp-ra-ham. Kinh Thánh không ghi lại một lời nào của ông; ông nói bằng việc làm. Lễ này rơi vào Mùa Chay, nhắc ta về sự vâng phục âm thầm.',
    question: 'Tôi có biết kết hợp sự công chính với lòng nhân hậu như Thánh Giu-se khi người khác làm điều tôi không hiểu?',
    action: 'Cầu nguyện cho các người cha và những ai lao động vất vả để nuôi gia đình; làm một việc tốt mà không nói ra.'
  },

  // ---------------------------------------------------------------- 21/03/2027 – Chúa Nhật Lễ Lá năm B
  'T3060-B': {
    theme: 'Vị Vua đi vào thành trên lưng lừa con, và lên ngai là thập giá.',
    first: 'Người Tôi Trung được Chúa mở tai mỗi sáng, để "biết dùng lời nói nâng đỡ kẻ nhọc nhằn" (c. 4). Người không chống cự khi bị đánh, bị phỉ nhổ, vì tin rằng "Chúa nâng đỡ tôi, nên tôi không phải hổ thẹn" (c. 7).',
    psalm: '"Ôi Thiên Chúa! Ôi Thiên Chúa! sao Chúa đã bỏ con?" Chúa Giê-su sẽ dùng chính lời thánh vịnh này trên thập giá. Thánh vịnh bắt đầu bằng tiếng kêu, nhưng kết thúc bằng lời ca ngợi.',
    second: 'Chúa Giê-su "huỷ bỏ chính mình mà nhận lấy thân phận tôi đòi" (c. 7), "tự hạ mình mà vâng lời cho đến chết, và chết trên thập giá" (c. 8). Vì thế Thiên Chúa đã tôn vinh Người (c. 9).',
    gospel: 'Bài Thương Khó theo Thánh Mác-cô kể ngắn gọn và trần trụi: Chúa Giê-su bị các môn đệ bỏ rơi, chịu xét xử, bị chế nhạo và chết trong cô đơn. Chính lúc Người tắt thở, một viên đại đội trưởng người ngoại lại là người đầu tiên tuyên xưng Người thật là Con Thiên Chúa.',
    connect: 'Ngày Lễ Lá mở đầu bằng tiếng tung hô và chuyển sang bài Thương Khó. I-sai-a vẽ chân dung Người Tôi Trung chịu đau khổ; Thánh vịnh cho ta nghe tiếng kêu của Người; thư Phi-líp-phê tóm tắt cả mầu nhiệm: hạ mình đến tận cùng và được tôn vinh. Cùng một đám đông có thể tung hô rồi kết án: Lễ Lá mời ta nhìn lại sự trung thành của mình.',
    question: 'Tôi có giống đám đông, tung hô Chúa khi dễ dàng và im lặng khi theo Chúa đòi giá phải trả?',
    action: 'Mang lá đã làm phép về nhà, đặt bên thánh giá; trong Tuần Thánh, dành thời gian đọc trọn một bài Thương Khó.'
  },

  // ---------------------------------------------------------------- Thứ Hai, Thứ Ba, Thứ Tư Tuần Thánh (mọi năm)
  'T3061': {
    theme: 'Hương thơm tỏa đầy nhà: tình yêu không tính toán dành cho Chúa.',
    first: 'Người Tôi Trung được Thiên Chúa tuyển chọn "không bẻ gãy cây lau bị giập, không dập tắt tim đèn còn khói" (c. 3). Sức mạnh của Người là sự hiền lành.',
    psalm: '"Chúa là sự sáng, và là Đấng cứu độ tôi": niềm tín thác khi bóng tối Tuần Thánh đang đến gần.',
    gospel: 'Sáu ngày trước Lễ Vượt Qua, cô Ma-ri-a xức chân Chúa bằng dầu thơm hảo hạng và lau bằng tóc mình. "Hương thơm toả đầy nhà" (c. 3). Giu-đa tính ra giá tiền; còn Chúa Giê-su nhận đó là việc chuẩn bị cho ngày mai táng Người.',
    connect: 'I-sai-a cho thấy sự dịu dàng của Người Tôi Trung; Tin Mừng cho thấy Người cũng đón nhận sự dịu dàng của người khác. Hai cách nhìn trước cùng một bình dầu: Ma-ri-a trao tặng không tính toán, Giu-đa chỉ thấy tiền.',
    question: 'Tình yêu của tôi dành cho Chúa có còn chỗ cho sự phí phạm vì yêu, hay mọi thứ đều được tính toán?',
    action: 'Dành cho Chúa một thời gian cầu nguyện lâu hơn thường lệ trong ngày hôm nay.'
  },
  'T3062': {
    theme: 'Giữa bữa ăn thân tình, bóng tối phản bội và lời chối bỏ.',
    first: 'Người Tôi Trung được Chúa gọi "từ khi tôi còn trong lòng mẹ" (c. 1). Có lúc Người cảm thấy mình vất vả uổng công, nhưng Thiên Chúa còn trao một sứ mạng lớn hơn: làm ánh sáng cho muôn dân.',
    psalm: '"Miệng con sẽ loan truyền sự Chúa công minh": trung thành với Chúa ngay cả khi bị bao vây.',
    gospel: 'Tại bữa ăn cuối cùng, "tâm hồn Người bị xao xuyến" (c. 21) khi báo trước một người sẽ nộp Người. Giu-đa nhận miếng bánh rồi đi ra, và Tin Mừng ghi: lúc ấy trời đã tối. Phê-rô hứa sẽ hy sinh mạng sống vì Thầy, nhưng Chúa báo trước ông sẽ chối Thầy ba lần.',
    connect: 'Người Tôi Trung tưởng mình vất vả uổng công; Chúa Giê-su xao xuyến trước sự phản bội của người thân. Cả Giu-đa lẫn Phê-rô đều thất bại, nhưng khác nhau ở chỗ: một người đi vào bóng tối, một người sau này khóc và trở về.',
    question: 'Khi vấp ngã, tôi bỏ đi vào bóng tối như Giu-đa, hay quay về với Chúa như Phê-rô?',
    action: 'Nếu có thể, đi xưng tội trước Tam Nhật Vượt Qua.'
  },
  'T3063': {
    theme: 'Ba mươi đồng bạc: cái giá con người đặt cho Chúa.',
    first: 'Người Tôi Trung được Chúa mở tai mỗi sáng, "để tôi biết dùng lời nói nâng đỡ kẻ nhọc nhằn" (c. 4). Người chịu đánh đập mà không thối lui, vì biết Chúa ở cùng.',
    psalm: '"Lạy Chúa, xin nhậm lời con theo lượng cả đức từ bi, đây là lúc biểu lộ tình thương."',
    gospel: 'Giu-đa hỏi các thượng tế: "Các ông cho tôi bao nhiêu, tôi nộp Người cho các ông?" (c. 15), và họ trả ba mươi đồng bạc. Trong khi đó, Chúa Giê-su vẫn chuẩn bị Lễ Vượt Qua với các môn đệ: "giờ Ta đã gần" (c. 18).',
    connect: 'Dân gian còn gọi hôm nay là Thứ Tư Gián Điệp. Người Tôi Trung trong I-sai-a và Chúa Giê-su trong Tin Mừng đều đi vào đau khổ cách tự do và tỉnh táo. Giu-đa định giá Chúa bằng tiền; Chúa lại hiến mạng mình không lấy gì cả.',
    question: 'Có khi nào tôi "bán" Chúa bằng những thứ nhỏ hơn ba mươi đồng bạc: một lợi ích, một chút tiện nghi, một lời khen?',
    action: 'Chuẩn bị tâm hồn cho Tam Nhật: sắp xếp công việc để có thể tham dự trọn các cử hành từ chiều mai.'
  },

  // ---------------------------------------------------------------- Thứ Năm Tuần Thánh – Thánh lễ Tiệc Ly (mọi năm)
  'T3064': {
    theme: 'Yêu đến cùng: Thánh Thể và cử chỉ rửa chân.',
    first: 'Lễ Vượt Qua đầu tiên: mỗi gia đình bắt một chiên con, lấy máu bôi lên khung cửa, ăn vội vàng, sẵn sàng lên đường. Đêm ấy Thiên Chúa giải thoát dân khỏi ách nô lệ, và Chúa truyền: "Các ngươi hãy ghi nhớ ngày ấy, làm lễ tưởng niệm" (c. 14).',
    psalm: '"Chén chúc tụng là sự thông hiệp Máu Chúa Ki-tô": chén Vượt Qua cũ nay trở thành chén Giao Ước mới.',
    second: 'Thánh Phao-lô truyền lại điều ông đã lãnh nhận: "trong đêm bị nộp", Chúa cầm lấy bánh và chén, và truyền: "Các con hãy làm việc này mà nhớ đến Ta" (c. 24-25).',
    gospel: 'Chúa Giê-su "đã yêu thương họ đến cùng" (c. 1). Người cởi áo, thắt khăn, quỳ xuống rửa chân cho các môn đệ, kể cả người sắp nộp Người. Rồi Người nói: "Vậy nếu Ta là Chúa và là Thầy mà còn rửa chân cho các con, thì các con cũng phải rửa chân cho nhau" (c. 14).',
    connect: 'Chiên Vượt Qua của Xuất hành, bánh và chén của Bữa Tiệc Ly, chậu nước rửa chân: ba hình ảnh của cùng một tình yêu. Gio-an không kể việc lập Thánh Thể mà kể việc rửa chân, như để nói: ai rước Thánh Thể thì phải sống phục vụ. Đêm nay cũng là đêm Chúa lập chức Linh mục.',
    question: 'Ai là người tôi khó "rửa chân" nhất, khó phục vụ nhất? Tôi có để Chúa rửa chân cho mình, nhận mình cần được tha thứ?',
    action: 'Ở lại chầu Thánh Thể sau Thánh lễ; làm một việc phục vụ khiêm tốn trong gia đình mà thường ngày mình tránh.'
  },

  // ---------------------------------------------------------------- Thứ Sáu Tuần Thánh (mọi năm)
  'T3065': {
    theme: 'Nhìn lên Đấng bị đâm thâu: bởi thương tích Người, chúng ta được chữa lành.',
    first: 'Người Tôi Trung "tàn tạ mất hết vẻ người". Nhưng "người đã mang lấy sự đau yếu của chúng ta, người đã gánh lấy sự đau khổ của chúng ta" (53, 4), "bị thương tích vì tội lỗi chúng ta" (53, 5). Lời ngôn sứ viết trước hàng trăm năm như đang mô tả chính đồi Gôn-gô-tha.',
    psalm: '"Lạy Cha, con phó linh hồn con trong tay Cha": lời cuối của Chúa Giê-su trên thập giá theo Thánh Lu-ca, lời phó thác của mọi Kitô hữu.',
    second: 'Chúng ta có một thượng tế "đã từng chịu thử thách bằng mọi cách như chúng ta, ngoại trừ tội lỗi" (4, 15). Vì thế, ta hãy mạnh dạn đến gần ngai ân sủng.',
    gospel: 'Bài Thương Khó theo Thánh Gio-an cho thấy Chúa Giê-su đi vào cuộc khổ nạn như một vị Vua: Người tự nộp mình trong vườn, đứng trước Phi-la-tô với uy quyền của sự thật, trao Mẹ cho người môn đệ yêu dấu, và chỉ trút hơi thở khi mọi sự đã hoàn tất. Từ cạnh sườn bị đâm thâu, máu và nước chảy ra.',
    connect: 'I-sai-a nói Người Tôi Trung gánh lấy tội lỗi ta; thư Do-thái nói Người là thượng tế cảm thông với ta; Gio-an cho thấy thập giá là ngai vàng, nơi tình yêu chiến thắng. Hôm nay không cử hành Thánh lễ; Hội Thánh lặng nhìn thập giá, hôn kính và ăn chay.',
    question: 'Tôi đang mang vết thương nào cần được đặt dưới chân thập giá để được chữa lành?',
    action: 'Giữ chay và kiêng thịt; tham dự nghi thức tưởng niệm Cuộc Thương Khó và hôn kính thánh giá; giữ thinh lặng nhiều hơn trong ngày.'
  },

  // ---------------------------------------------------------------- Canh thức Vượt Qua (mọi năm)
  'T3066': {
    theme: 'Đêm cực thánh: ánh sáng Đức Kitô phục sinh xua tan tối tăm.',
    first: 'Bài đọc cuối Cựu Ước của đêm nay: dân Chúa đã làm nhơ bẩn đất của mình và phải tản mác, nhưng Thiên Chúa vì danh thánh của Người mà quy tụ, tẩy rửa và đổi mới họ: ban cho họ một quả tim mới và một thần khí mới. Lời hứa ấy được thực hiện trong bí tích Rửa Tội.',
    psalm: '"Như nai rừng khát mong nguồn nước, hồn con khát Chúa, Chúa Trời ôi!" Đêm nay nhiều dự tòng được rửa tội, và cả cộng đoàn lặp lại lời tuyên hứa rửa tội.',
    second: '"Tất cả chúng ta đã chịu phép rửa trong Ðức Giê-su Ki-tô, tức là đã chịu phép rửa trong sự chết của Người" (c. 3), để "cả chúng ta cũng phải sống đời sống mới" (c. 4).',
    gospel: 'Những người phụ nữ đến mộ lúc sáng sớm và thấy mộ trống. Lời loan báo vang lên: Người không còn ở đây, Người đã sống lại. Họ được sai đi báo tin cho các môn đệ.',
    connect: 'Đêm Canh thức kể lại toàn bộ lịch sử cứu độ, từ sáng tạo, qua Xuất hành, đến lời hứa quả tim mới của Ê-dê-ki-en. Thánh Phao-lô cho biết lời hứa ấy thành hiện thực khi ta được rửa tội vào cái chết và sự sống lại của Đức Kitô. Tin Mừng loan báo tin vui làm nền cho tất cả: mộ đã trống.',
    question: 'Đêm nay, khi lặp lại lời hứa rửa tội, tôi muốn từ bỏ điều gì để thật sự "sống đời sống mới"?',
    action: 'Tham dự trọn Canh thức Vượt Qua; mang nến phục sinh về nhà và cùng gia đình cầu nguyện.'
  },

  // ---------------------------------------------------------------- Chúa Nhật Phục Sinh (bài đọc giống nhau mọi năm)
  'T4010-B': {
    theme: 'Mộ trống và tấm khăn liệm cuộn lại: "Ông thấy và ông tin".',
    first: 'Phê-rô, người từng chối Thầy, giờ mạnh dạn làm chứng: "ngày thứ ba, Thiên Chúa đã cho Người sống lại" (c. 40). Các ông là những người "đã ăn uống với Người sau khi Người từ cõi chết sống lại" (c. 41).',
    psalm: '"Đây là ngày Chúa đã lập ra, chúng ta hãy mừng rỡ hân hoan về ngày đó."',
    second: '"Nếu anh em đã sống lại với Ðức Ki-tô, anh em hãy tìm những sự trên trời" (c. 1), vì sự sống của anh em "được ẩn giấu với Ðức Ki-tô trong Thiên Chúa" (c. 3).',
    gospel: 'Ma-ri-a Ma-đa-lê-na ra mồ "từ sáng sớm khi trời còn tối" (c. 1) và thấy tảng đá đã lăn ra. Phê-rô và người môn đệ kia chạy đến. Người môn đệ ấy nhìn những khăn liệm còn để lại, khăn che đầu cuộn riêng một chỗ, và Tin Mừng ghi: "Ông thấy và ông tin" (c. 8).',
    connect: 'Tin Mừng kể buổi sáng đầu tiên với mộ trống và lòng tin vừa nhen nhóm; sách Công vụ cho thấy niềm tin ấy biến Phê-rô thành chứng nhân can đảm; thư Cô-lô-xê nói ý nghĩa cho đời ta: đã sống lại với Đức Kitô thì hãy sống khác. Phục Sinh không chỉ là một biến cố quá khứ, mà là sự sống mới đang bắt đầu nơi ta.',
    question: 'Tôi đang chạy đến ngôi mộ nào trong đời mình, nơi tưởng chỉ có mất mát? Tôi có nhận ra dấu chỉ của sự sống ở đó không?',
    action: 'Chúc mừng Phục Sinh một người đang buồn hay đang mất mát, kèm một lời cầu nguyện cho họ.'
  },

  // ---------------------------------------------------------------- 25/03 – Lễ Truyền Tin (mọi năm, có năm phải dời)
  'S72503': {
    theme: 'Ngôi Lời làm người trong lòng Đức Maria nhờ một lời "xin vâng".',
    first: 'Vua A-khát không dám xin dấu lạ, nhưng Thiên Chúa vẫn ban: "này một trinh nữ sẽ thụ thai, sinh hạ một con trai, và tên con trẻ sẽ gọi là Em-ma-nu-en, nghĩa là Thiên Chúa ở cùng chúng ta" (c. 14).',
    psalm: '"Lạy Chúa, này con xin đến để thực thi ý Chúa": lời của Chúa Con khi đến thế gian, và của Đức Maria.',
    second: 'Khi vào thế gian, Đức Kitô nói: Chúa không muốn hy tế, "nhưng đã tạo nên cho con một thể xác" (c. 5). Ơn cứu độ không đến từ máu chiên bò, mà từ chính thân xác Con Thiên Chúa được dâng hiến.',
    gospel: 'Sứ thần Gáp-ri-en được sai đến với một trinh nữ ở Na-da-rét. Sau khi nghe "không có việc gì mà Chúa không làm được" (c. 37), Đức Maria thưa: "Này tôi là tôi tớ Chúa, tôi xin vâng như lời Thiên thần truyền" (c. 38).',
    connect: 'I-sai-a báo trước Em-ma-nu-en; thư Do-thái cho thấy Chúa Con đến để làm theo ý Cha với một thân xác; Tin Mừng kể thân xác ấy được cưu mang nhờ lời xin vâng của Đức Maria. Hai lời "xin đến" và "xin vâng" gặp nhau, mở đầu ơn cứu độ. Chín tháng sau là lễ Giáng Sinh.',
    question: 'Chúa đang mời tôi thưa "xin vâng" với điều gì mà tôi còn ngần ngại?',
    action: 'Đọc Kinh Truyền Tin vào buổi trưa hôm nay; cầu nguyện cho các bà mẹ đang mang thai và cho sự sống.'
  }
});

// Chúa Nhật Phục Sinh: bài đọc giống nhau cả ba năm
window.MEDITATIONS['T4010-A'] = window.MEDITATIONS['T4010-C'] = window.MEDITATIONS['T4010-B'];

Object.assign(window.MEDITATIONS, {

  // ---------------------------------------------------------------- Bát Nhật Phục Sinh (mọi năm)
  'T4011': {
    theme: '"Các bà đừng sợ": niềm vui Phục Sinh mạnh hơn mọi lời dối trá.',
    first: 'Phê-rô, người từng chối Thầy, nay đứng ra làm chứng giữa Giê-ru-sa-lem: Đức Giê-su Na-da-rét mà anh em đã giết, Thiên Chúa đã cho Người sống lại. Sự sống lại của Thầy đã biến đổi chính người môn đệ.',
    psalm: '"Xin bảo toàn con, lạy Chúa, vì con tìm nương tựa Chúa": niềm tin rằng cái chết không có lời cuối cùng.',
    gospel: 'Các bà rời mộ "vừa sợ lại vừa hớn hở vui mừng" (c. 8). Chúa Giê-su đón gặp các bà: "Các bà đừng sợ. Hãy đi báo tin" (c. 10). Cùng lúc đó, các thượng tế đưa tiền cho lính canh để phao tin xác bị lấy trộm.',
    connect: 'Hai cách đáp lại tin Phục Sinh: các bà và Phê-rô ra đi loan báo; các thượng tế dùng tiền để che giấu. Sự thật có thể bị bóp méo, nhưng không thể bị chôn vùi.',
    question: 'Tôi đang để nỗi sợ nào ngăn mình chia sẻ niềm vui đức tin?',
    action: 'Kể cho một người thân nghe điều làm mình vui nhất trong mùa Phục Sinh này.'
  },
  'T4012': {
    theme: 'Chúa gọi tên ta: nước mắt Ma-ri-a Ma-đa-lê-na hóa thành niềm vui.',
    first: 'Nghe Phê-rô giảng, dân chúng "đau đớn trong lòng" và hỏi: "Thưa các ông, chúng tôi phải làm gì?" (c. 37). Câu trả lời: hãy ăn năn sám hối và chịu phép rửa. Lời loan báo Phục Sinh chạm đến lòng người và mở ra con đường mới.',
    psalm: '"Địa cầu đầy ân sủng Chúa": tình thương Chúa tràn ngập khắp mặt đất.',
    gospel: 'Ma-ri-a đứng khóc bên mồ, tưởng Chúa là người làm vườn. Chỉ khi Người gọi tên: "Ma-ri-a", bà mới nhận ra và thưa: "Ráp-bô-ni!" (c. 16). Rồi bà được sai đi: "Tôi đã trông thấy Chúa" (c. 18).',
    connect: 'Dân chúng ở Giê-ru-sa-lem và Ma-ri-a Ma-đa-lê-na đều được Lời chạm đến tận lòng. Chúa Phục Sinh không đến bằng một bài giảng dài, mà bằng việc gọi đích danh từng người.',
    question: 'Tôi có đang khóc bên một ngôi mộ mà không nhận ra Chúa đang đứng ngay sau lưng mình?',
    action: 'Dành vài phút thinh lặng để nghe Chúa gọi tên mình trong cầu nguyện.'
  },
  'T4013': {
    theme: 'Trên đường Em-mau: Chúa đồng hành, giải thích Kinh Thánh và bẻ bánh.',
    first: 'Phê-rô nói với người què ở Cửa Đẹp: "Vàng bạc thì tôi không có, nhưng có cái này tôi cho anh, là: nhân danh Đức Giê-su Ki-tô Na-da-rét, anh hãy đứng dậy mà đi!" (c. 6). Hội Thánh không giàu tiền bạc, nhưng có Danh Chúa Giê-su.',
    psalm: '"Tâm hồn những ai tìm Chúa, hãy mừng vui."',
    gospel: 'Hai môn đệ buồn bã rời Giê-ru-sa-lem. Chúa cùng đi với họ, giải thích Kinh Thánh, và họ nài ép: "Mời ông ở lại với chúng tôi, vì trời đã về chiều" (c. 29). Khi Người bẻ bánh, "mắt họ sáng ra và nhận ra Người" (c. 31). Họ nói với nhau: "Phải chăng lòng chúng ta đã chẳng sốt sắng lên" (c. 32).',
    connect: 'Lời Chúa và Bẻ Bánh: hai phần của mỗi Thánh lễ đã có từ con đường Em-mau. Người què được chữa nhờ Danh Chúa; hai môn đệ được chữa khỏi thất vọng nhờ gặp Chúa. Cả hai đều "đứng dậy" và lên đường.',
    question: 'Trong những lúc thất vọng, tôi có mời Chúa "ở lại" với mình không?',
    action: 'Tham dự Thánh lễ ngày thường trong tuần Bát Nhật, chú ý lắng nghe Lời Chúa trước khi rước lễ.'
  },
  'T4014': {
    theme: '"Chính Thầy đây!": Chúa Phục Sinh có xương thịt, và sai các môn đệ làm chứng.',
    first: 'Phê-rô nói với dân chúng: không phải nhờ quyền năng hay đạo đức riêng mà người què đi được, nhưng nhờ Thiên Chúa của tổ tiên đã tôn vinh Đức Giê-su. Các Tông đồ không giữ vinh quang cho mình.',
    psalm: '"Lạy Chúa, lạy Chúa chúng con, lạ lùng thay danh Chúa khắp nơi hoàn cầu."',
    gospel: 'Các môn đệ tưởng thấy ma. Chúa nói: "Hãy xem tay chân Thầy: chính Thầy đây!" (c. 39), rồi ăn một mẩu cá nướng trước mặt họ. Người mở trí cho họ hiểu Kinh Thánh và sai họ làm chứng.',
    connect: 'Chúa Phục Sinh không phải là một hồn ma hay một ý tưởng, mà là Người thật, mang dấu đinh. Các Tông đồ làm chứng về Người không bằng sức riêng, mà bằng quyền năng của Danh Người.',
    question: 'Đức tin của tôi gắn với một Đấng sống động, hay chỉ còn là những ý tưởng đẹp?',
    action: 'Mời một người cùng chia sẻ bữa ăn hôm nay, như Chúa đã ăn với các môn đệ.'
  },
  'T4015': {
    theme: '"Chính Chúa đó": nhận ra Chúa giữa công việc thường ngày.',
    first: 'Phê-rô và Gio-an bị bắt vì loan báo sự sống lại, nhưng số người tin vẫn tăng lên. Trước hội đồng, Phê-rô làm chứng: chính nhờ Danh Đức Giê-su mà người què được lành.',
    psalm: '"Phiến đá mà những người thợ xây loại bỏ, đã biến nên tảng đá góc tường."',
    gospel: 'Suốt đêm các môn đệ không bắt được con cá nào. Lúc rạng đông, theo lời người lạ trên bờ, họ thả lưới và được đầy cá. Người môn đệ Chúa yêu nhận ra: "Chính Chúa đó" (c. 7). Trên bờ, Chúa đã nhóm lửa và dọn sẵn bữa ăn: "Các con hãy lại ăn" (c. 12).',
    connect: 'Chúa Phục Sinh hiện ra không chỉ trong Đền Thờ, mà ngay giữa nghề đánh cá thường ngày của các môn đệ. Đấng từng là đá tảng bị loại bỏ nay chăm sóc các môn đệ như người mẹ dọn bữa sáng.',
    question: 'Sau những đêm trắng tay trong công việc, tôi có nghe ra tiếng Chúa chỉ cho mình thả lưới lại?',
    action: 'Bắt đầu công việc hôm nay bằng một lời cầu xin Chúa hiện diện trong việc mình làm.'
  },
  'T4016': {
    theme: '"Nghe các ngài hơn nghe Chúa, có phải lẽ không?": can đảm làm chứng.',
    first: 'Hội đồng ngạc nhiên vì Phê-rô và Gio-an "thất học" mà lại can đảm, và "còn biết rằng hai ngài đã ở cùng Đức Giê-su" (c. 13). Bị cấm giảng, hai ông đáp: "nghe các ngài hơn nghe Chúa, có phải lẽ không?" (c. 19).',
    psalm: '"Tôi cảm tạ Chúa vì Chúa đã nhậm lời tôi."',
    gospel: 'Các môn đệ lần lượt không tin những người đã thấy Chúa sống lại, và Chúa khiển trách sự cứng lòng ấy. Nhưng Người vẫn sai chính họ đi: "Các con hãy đi khắp thế gian rao giảng Tin Mừng cho muôn loài" (c. 15).',
    connect: 'Tin Mừng cho thấy các môn đệ chậm tin; sách Công vụ cho thấy chính họ trở nên can đảm lạ thường. Sự khác biệt đến từ việc đã "ở cùng Đức Giê-su". Chúa không chọn người hoàn hảo, Người biến đổi người Người chọn.',
    question: 'Người khác có nhận ra nơi tôi dấu hiệu của một người "đã ở cùng Đức Giê-su" không?',
    action: 'Chuẩn bị cho Chúa Nhật Lòng Thương Xót bằng việc xưng tội hoặc tha thứ cho một người.'
  },

  // ---------------------------------------------------------------- 04/04/2027 – CN II Phục Sinh năm B (Lòng Thương Xót)
  'T4020-B': {
    theme: 'Bình an và lòng thương xót: Chúa Phục Sinh đến giữa những cánh cửa đóng kín.',
    first: 'Cộng đoàn tín hữu đầu tiên "đồng tâm nhất trí" (c. 32), chia sẻ của cải đến nỗi "không có ai phải túng thiếu" (c. 34). Sự sống lại của Chúa sinh ra một lối sống mới: hiệp thông.',
    psalm: '"Hãy cảm tạ Chúa, vì Chúa hảo tâm, vì đức từ bi của Người muôn thuở."',
    second: 'Ai tin Đức Giê-su là Đấng Ki-tô thì sinh bởi Thiên Chúa. "Đây là cuộc thắng trận thế gian, là chính đức tin của chúng ta" (c. 4).',
    gospel: 'Các môn đệ đóng kín cửa vì sợ. Chúa đến đứng giữa: "Bình an cho các con" (c. 19), thổi hơi và trao Thánh Thần để tha tội. Tô-ma vắng mặt và không tin. Tám ngày sau, Chúa mời ông chạm vào vết thương: "chớ cứng lòng, nhưng hãy tin" (c. 27). Tô-ma thưa: "Lạy Chúa con, lạy Thiên Chúa của con!" (c. 28). "Phúc cho những ai đã không thấy mà tin" (c. 29).',
    connect: 'Tin Mừng kể Chúa ban bình an và quyền tha tội; sách Công vụ cho thấy hoa trái là một cộng đoàn hiệp nhất; thư Gio-an nói đức tin ấy chiến thắng thế gian. Chúa Nhật Lòng Thương Xót: vết thương của Chúa không biến mất, nhưng trở thành nơi chữa lành sự nghi ngờ của Tô-ma.',
    question: 'Những cánh cửa nào trong tôi đang đóng kín vì sợ hãi? Tôi có dám đến chạm vào lòng thương xót của Chúa qua bí tích Hòa Giải?',
    action: 'Đọc chậm lời tuyên xưng của Tô-ma khi rước lễ hôm nay; chia sẻ một phần của cải cho người túng thiếu.'
  },

  // ---------------------------------------------------------------- 11/04/2027 – CN III Phục Sinh năm B
  'T4030-B': {
    theme: 'Chúa Phục Sinh mở trí ta hiểu Kinh Thánh, và sai ta làm chứng về lòng thương xót.',
    first: 'Phê-rô nói thẳng: anh em đã chối bỏ "Đấng Thánh, Đấng Công Chính" và giết "Đấng ban sự sống" (c. 14-15). Nhưng ông cũng nói: anh em đã hành động "vì không biết" (c. 17). Lời tố cáo đi kèm lời mời hoán cải.',
    psalm: '"Lạy Chúa, xin chiếu sáng thiên nhan Chúa trên mình chúng con!"',
    second: '"Cha viết những điều này cho các con, để các con đừng phạm tội. Nhưng nếu có ai đã phạm tội, thì chúng ta có Đức Giêsu Kitô, Đấng công chính, làm trạng sư nơi Đức Chúa Cha" (c. 1).',
    gospel: 'Chúa hiện ra, cho xem tay chân, ăn cá nướng trước mặt các môn đệ. Rồi "Người mở trí cho các ông am hiểu Kinh Thánh" (c. 45), và sai họ rao giảng "sự thống hối và sự ăn năn để lãnh ơn tha tội cho muôn dân" (c. 47). "Còn các con, các con sẽ làm chứng nhân về những điều ấy" (c. 48).',
    connect: 'Cả ba bài đọc cùng nói về tội và ơn tha thứ: Phê-rô mời dân hoán cải; thư Gio-an nói ta có Đấng bào chữa; Tin Mừng sai các môn đệ rao giảng ơn tha tội cho muôn dân. Người làm chứng về sự Phục Sinh trước hết là người đã được tha thứ.',
    question: 'Tôi có tin rằng khi phạm tội, mình có một "trạng sư" là Chúa Giê-su, chứ không phải một quan tòa chỉ chờ kết án?',
    action: 'Đọc Kinh Thánh mỗi ngày trong tuần này, xin Chúa "mở trí" cho mình hiểu.'
  },

  // ---------------------------------------------------------------- 18/04/2027 – CN IV Phục Sinh năm B (Chúa Chiên Lành)
  'T4040-B': {
    theme: 'Mục Tử tốt lành biết từng con chiên và tự nguyện hiến mạng sống.',
    first: 'Phê-rô, "được đầy Thánh Thần" (c. 8), tuyên bố trước hội đồng: Đức Giê-su là viên đá bị thợ xây loại bỏ đã trở thành Đá Góc, "và ơn cứu độ không gặp được ở nơi một ai khác" (c. 12).',
    psalm: '"Phiến đá mà những người thợ xây loại bỏ, đã biến nên tảng đá góc tường."',
    second: '"Các con hãy coi: tình yêu của Chúa Cha đối với chúng ta thế nào, khiến chúng ta được gọi là con cái Thiên Chúa, và sự thật là thế" (c. 1). Điều ta sẽ trở thành vẫn chưa tỏ ra, nhưng ta sẽ giống như Người (c. 2).',
    gospel: '"Ta là mục tử tốt lành. Mục tử tốt lành thí mạng sống vì chiên" (c. 11). Kẻ chăn thuê bỏ chạy khi sói đến; còn Chúa "biết các chiên Ta, và các chiên Ta biết Ta" (c. 14). Người có những chiên khác chưa thuộc về đàn, và Người muốn chỉ có "một đàn chiên và một chủ chiên" (c. 16). "Không ai cất mạng sống khỏi Ta, nhưng tự Ta, Ta thí mạng sống" (c. 18).',
    connect: 'Đá Góc bị loại bỏ và Mục Tử hiến mạng là cùng một Đấng: Người chịu loại bỏ để trở thành nền móng, chịu chết để chiên được sống. Thư Gio-an cho thấy tình yêu ấy làm ta thành con cái Thiên Chúa. Chúa Nhật này là Ngày Thế giới cầu nguyện cho ơn thiên triệu.',
    question: 'Tôi có thật sự để Chúa "biết" mình, kể cả những góc tối nhất? Tôi có đang là "kẻ chăn thuê" trong trách nhiệm của mình?',
    action: 'Cầu nguyện cho ơn gọi linh mục, tu sĩ; khích lệ một bạn trẻ đang tìm hiểu ơn gọi.'
  },

  // ---------------------------------------------------------------- 25/04/2027 – CN V Phục Sinh năm B
  'T4050-B': {
    theme: 'Ở lại trong Chúa như cành nho gắn liền với cây.',
    first: 'Sau khi trở lại, Sao-lô đến Giê-ru-sa-lem nhưng ai cũng sợ ông. Ba-na-ba đứng ra dẫn ông đến gặp các Tông đồ. Người mới hoán cải cần một người tin tưởng và đồng hành.',
    psalm: '"Lạy Chúa, bởi Chúa mà lời con ca ngợi vang lên trong đại hội."',
    second: '"Chúng ta đừng yêu bằng lời nói và miệng lưỡi, nhưng bằng việc làm và chân thật" (c. 18). Và nếu lòng ta khiển trách ta, "thì Thiên Chúa còn lớn hơn lòng chúng ta" (c. 20).',
    gospel: '"Thầy là cây nho thật, và Cha Thầy là người trồng nho" (c. 1). Cành nào sinh trái thì được tỉa sạch để sai trái hơn. "Thầy là cây nho, các con là nhành", và "không có Thầy, các con không thể làm được gì" (c. 5).',
    connect: 'Sao-lô được Ba-na-ba nối kết vào cộng đoàn, như cành được ghép vào cây nho. Thư Gio-an cho biết hoa trái của việc ở lại trong Chúa là yêu thương bằng việc làm. Việc cắt tỉa có thể đau, nhưng là để sinh nhiều trái hơn.',
    question: 'Điều gì trong đời tôi Chúa đang cắt tỉa? Tôi có thể là Ba-na-ba cho ai đang bị cộng đoàn nghi ngại?',
    action: 'Làm một việc yêu thương cụ thể "bằng việc làm" thay cho lời hứa suông.'
  },

  // ---------------------------------------------------------------- 02/05/2027 – CN VI Phục Sinh năm B
  'T4060-B': {
    theme: 'Thiên Chúa là Tình Yêu: Chúa gọi ta là bạn hữu.',
    first: 'Phê-rô vào nhà ông Co-nê-li-ô, một người ngoại, và nhận ra: "Thiên Chúa không thiên tư tây vị" (c. 34). Thánh Thần ngự xuống cả trên dân ngoại, vượt qua mọi ranh giới người ta dựng lên.',
    psalm: '"Chúa đã công bố ơn cứu độ của Người trước mặt chư dân."',
    second: '"Thiên Chúa là Tình Yêu" (c. 8). Và tình yêu ấy là thế này: không phải ta đã yêu mến Thiên Chúa, nhưng chính Người đã yêu thương ta trước (c. 10).',
    gospel: '"Như Cha đã yêu mến Thầy, Thầy cũng yêu mến các con. Hãy ở lại trong tình yêu của Thầy" (c. 9). "Không có tình yêu nào lớn hơn tình yêu của người thí mạng vì bạn hữu mình" (c. 13). "Thầy gọi các con là bạn hữu" (c. 15), và "không phải các con đã chọn Thầy, nhưng chính Thầy đã chọn các con" (c. 16).',
    connect: 'Ba bài đọc như ba vòng tròn tình yêu mở rộng dần: Thiên Chúa yêu ta trước (thư Gio-an); Chúa Giê-su gọi ta là bạn hữu (Tin Mừng); tình yêu ấy không chừa ai, kể cả người ngoại (Công vụ). Mến Chúa và yêu người không tách rời nhau.',
    question: 'Tôi đang sống với Chúa như một tôi tớ sợ hãi hay như một người bạn? Có ai tôi đang "thiên tư tây vị" để loại ra khỏi tình thương của mình?',
    action: 'Làm quen hoặc giúp đỡ một người khác biệt với mình về hoàn cảnh hay niềm tin.'
  },

  // ---------------------------------------------------------------- 09/05/2027 – Lễ Thăng Thiên năm B (VN: CN VII Phục Sinh)
  'T4080-B': {
    theme: 'Chúa lên trời không phải để xa ta, mà để ở cùng ta cách mới và sai ta đi.',
    first: 'Trong bốn mươi ngày, Chúa Phục Sinh hiện ra và nói về Nước Thiên Chúa. Các môn đệ vẫn hỏi về việc khôi phục nước Ít-ra-en; Chúa đáp: đó không phải việc của các con, các con sẽ nhận sức mạnh Thánh Thần để làm chứng cho Người đến tận cùng trái đất.',
    psalm: '"Thiên Chúa ngự lên giữa tiếng tưng bừng, Chúa ngự lên trong tiếng kèn vang."',
    second: 'Thánh Phao-lô cầu xin cho anh em được "mắt tâm hồn" sáng suốt (c. 18), để biết niềm hy vọng của ơn gọi, và quyền năng đã làm cho Đức Kitô sống lại và ngự bên hữu Thiên Chúa.',
    gospel: '"Các con hãy đi khắp thế gian, rao giảng Tin Mừng cho mọi tạo vật" (c. 15). Chúa lên trời, còn các môn đệ ra đi, và Tin Mừng ghi: "có Chúa cùng hoạt động với các ông" (c. 20).',
    connect: 'Sách Công vụ và Tin Mừng kể cùng một biến cố từ hai phía: Chúa lên trời và các môn đệ được sai đi. Thư Ê-phê-xô cho biết Đấng lên trời vẫn là Đầu của Hội Thánh. Thăng Thiên không phải là lúc Chúa vắng mặt, mà là lúc Hội Thánh bắt đầu sứ mạng, "có Chúa cùng hoạt động".',
    question: 'Tôi có đang đứng nhìn trời chờ đợi, thay vì ra đi làm chứng ở nơi mình sống?',
    action: 'Trong tuần chuẩn bị lễ Hiện Xuống, đọc mỗi ngày một lời cầu xin Chúa Thánh Thần.'
  },

  // ---------------------------------------------------------------- 16/05/2027 – Chúa Thánh Thần Hiện Xuống năm B
  'T5001-B': {
    theme: 'Thánh Thần đổ xuống: một Thánh Thần, nhiều ân sủng, một thân thể.',
    first: 'Ngày lễ Ngũ Tuần, tiếng động như gió mạnh và những lưỡi như bằng lửa đậu trên từng người. Các môn đệ được đầy Thánh Thần, và người từ khắp nơi "đều nghe các môn đệ nói tiếng thổ âm của mình" (c. 6). Tháp Ba-ben chia rẽ ngôn ngữ; Thánh Thần quy tụ mọi dân.',
    psalm: '"Lạy Chúa, xin sai Thánh Thần Chúa đến, và xin canh tân bộ mặt trái đất."',
    second: '"Không ai có thể nói Đức Giêsu là Chúa mà lại không do Thánh Thần" (c. 3). "Có nhiều thứ ân sủng, nhưng chỉ có một Thánh Thần" (c. 4), và tất cả được thanh tẩy để làm nên một thân thể (c. 13).',
    gospel: 'Chiều ngày Phục Sinh, Chúa đến giữa các môn đệ đang đóng kín cửa: "Bình an cho các con! Như Cha đã sai Thầy, Thầy cũng sai các con" (c. 21). Người thổi hơi: "Các con hãy nhận lấy Thánh Thần" (c. 22), và trao quyền tha tội.',
    connect: 'Tin Mừng cho thấy Thánh Thần được ban như hơi thở bình an; sách Công vụ cho thấy Thánh Thần như gió và lửa sai các môn đệ ra đi; thư Cô-rin-tô cho thấy Thánh Thần như sợi dây hiệp nhất các ân sủng khác nhau. Lễ Hiện Xuống khép lại Mùa Phục Sinh và mở ra thời gian của Hội Thánh.',
    question: 'Ân sủng nào Thánh Thần đã ban cho tôi để xây dựng cộng đoàn? Tôi đang dùng nó, hay giữ nó cho riêng mình?',
    action: 'Đọc Ca tiếp liên Chúa Thánh Thần; nhận một việc phục vụ cụ thể trong giáo xứ.'
  },

  // ---------------------------------------------------------------- Đức Maria, Mẹ Hội Thánh (Thứ Hai sau Hiện Xuống)
  'S8411': {
    theme: '"Này là Mẹ con": Đức Maria, Mẹ của các môn đệ.',
    first: 'Sau tội nguyên tổ, Thiên Chúa hỏi: "Ngươi ở đâu vậy?" (c. 9), và hứa sự thù nghịch giữa con rắn và người nữ. Người nữ ấy được Hội Thánh nhận ra nơi Đức Maria, Evà mới, Mẹ của những người sống.',
    psalm: '"Hỡi thành đô của Thiên Chúa, mọi người truyền tụng những điều hiển hách về thành": Si-on, người mẹ của muôn dân, là hình ảnh Đức Maria và Hội Thánh.',
    gospel: 'Dưới chân thập giá, Chúa Giê-su trao Mẹ cho người môn đệ: "Thưa Bà, này là Con Bà" và "Này là Mẹ con" (c. 26-27). "Từ giờ đó môn đệ đã đón bà về nhà mình" (c. 27).',
    connect: 'Lời hứa về người nữ trong sách Sáng thế thành hiện thực dưới chân thập giá. Ngay sau lễ Hiện Xuống, Hội Thánh mừng Đức Maria là Mẹ Hội Thánh, vì Mẹ đã cùng các Tông đồ cầu nguyện chờ Thánh Thần, và tiếp tục làm mẹ của mọi môn đệ.',
    question: 'Tôi có đón Mẹ về nhà mình như người môn đệ, để Mẹ có chỗ trong đời sống gia đình và cầu nguyện của tôi?',
    action: 'Lần một chuỗi Mân Côi cùng gia đình, cầu cho Hội Thánh.'
  },

  // ---------------------------------------------------------------- Các lễ Tông Đồ, Thánh sử (mọi năm)
  'S72504': {
    theme: 'Thánh Mác-cô: người từng vấp ngã trở thành người viết Tin Mừng.',
    first: 'Thánh Phê-rô khuyên: "hãy mặc lấy đức khiêm nhường" (c. 5), "hãy trút bỏ cho Người mọi điều lo lắng của anh em, bởi vì chính Người chăm sóc anh em" (c. 7). Thư kết thúc bằng lời chào của "Marcô, con tôi" (c. 13), người cộng tác thân tín của Phê-rô.',
    psalm: '"Lạy Chúa, con sẽ ca ngợi tình thương của Chúa tới muôn đời."',
    gospel: '"Các con hãy đi khắp thế gian, rao giảng Tin mừng cho mọi tạo vật" (c. 15). Đoạn kết Tin Mừng Mác-cô cho thấy Chúa cùng hoạt động với những người Người sai đi.',
    connect: 'Theo truyền thống, Mác-cô từng bỏ dở chuyến truyền giáo đầu tiên với Phao-lô, nhưng sau đó trở thành người cộng tác của Phê-rô và viết sách Tin Mừng mang tên ông (nhiều học giả cho rằng đây là sách Tin Mừng được viết sớm nhất). Lời khuyên khiêm nhường và tín thác của Phê-rô rất hợp với một người đã từng vấp ngã và được nâng dậy.',
    question: 'Tôi có cho người khác (và cho chính mình) cơ hội làm lại sau một lần thất bại?',
    action: 'Đọc trọn Tin Mừng theo Thánh Mác-cô trong tuần này: đây là sách Tin Mừng ngắn nhất.'
  },
  'S70305': {
    theme: '"Thầy là đường, là sự thật và là sự sống": ai thấy Thầy là xem thấy Cha.',
    first: 'Thánh Phao-lô nhắc lại cốt lõi Tin Mừng: Đức Kitô đã chết vì tội lỗi chúng ta, được mai táng, và ngày thứ ba đã sống lại. Người đã hiện ra với nhiều người, trong đó có Gia-cô-bê.',
    psalm: '"Tiếng chúng đã vang cùng trái đất": lời chứng của các Tông đồ lan tới mọi nơi.',
    gospel: '"Thầy là đường, là sự thật và là sự sống" (c. 6). Phi-líp-phê xin: "xin tỏ cho chúng con xem thấy Cha và như thế là đủ cho chúng con" (c. 8). Chúa đáp: "Thầy ở với các con bấy lâu rồi, thế mà con chưa biết Thầy ư? Phi-líp-phê, ai thấy Thầy là xem thấy Cha" (c. 9).',
    connect: 'Phi-líp-phê muốn thấy Cha; Chúa Giê-su cho biết chính Người là khuôn mặt của Cha. Gia-cô-bê được Chúa Phục Sinh hiện ra cách riêng. Hai Tông đồ, hai con đường, cùng dẫn đến một Đấng là Đường.',
    question: 'Đã ở với Chúa bấy lâu, tôi đã thật sự biết Người chưa?',
    action: 'Đọc chậm Ga 14, 1-14 và dừng lại ở câu nào chạm đến mình.'
  },
  'S71405': {
    theme: 'Thánh Mát-thi-a: được chọn để thay chỗ trống, làm chứng về sự Phục Sinh.',
    first: 'Sau khi Giu-đa bỏ đi, Phê-rô đề nghị chọn một người thay thế: người đã đi theo Chúa từ đầu, để cùng làm chứng về sự sống lại của Người. Họ cầu nguyện, bắt thăm, và Mát-thi-a được chọn.',
    psalm: '"Chúa cho người ngồi với những bậc quân vương của dân Người": Thiên Chúa nâng người bé mọn lên.',
    gospel: '"Không phải các con đã chọn Thầy, nhưng chính Thầy đã chọn các con" (c. 16). Ơn gọi Tông đồ bắt đầu từ sáng kiến của Chúa, và được sống trong tình bạn: "Thầy gọi các con là bạn hữu" (c. 15).',
    connect: 'Mát-thi-a không nổi tiếng; Kinh Thánh không ghi lại lời nào của ông. Nhưng ông đã trung thành đi theo Chúa từ đầu, âm thầm, và được chọn khi Hội Thánh cần. Chính Chúa chọn, qua lời cầu nguyện của cộng đoàn.',
    question: 'Tôi có sẵn sàng lấp vào một chỗ trống trong cộng đoàn khi được mời, dù công việc âm thầm?',
    action: 'Cầu nguyện cho các giám mục, những người kế vị các Tông đồ.'
  }
});

// Những ngày dùng chung bộ bài đọc
(function (M) {
  // Tab đầu ngày 25/12 cũng là bài đọc lễ Ban Ngày, nhưng Tin Mừng dùng bản dịch khác
  M['O82512'] = Object.assign({}, M['T22512#2'], {
    gospel: 'Lúc khởi đầu đã có Ngôi Lời, và Ngôi Lời là Thiên Chúa. "Người đã đến nhà các gia nhân Người, và các gia nhân Người đã không tiếp nhận Người" (c. 11); nhưng ai tiếp nhận Người thì được quyền trở nên con Thiên Chúa (c. 12). "Ngôi Lời đã hoá thành nhục thể, và Người đã cư ngụ giữa chúng tôi" (c. 14).'
  });
  M['O82412'] = M['S224122'];    // bài đọc tùy chọn chiều 24/12 = Lễ Vọng
  M['T2030-A'] = M['T2030-C'] = M['T2030-B'];   // Hiển Linh
})(window.MEDITATIONS);

Object.assign(window.MEDITATIONS, {

  // ---------------------------------------------------------------- 23/05/2027 – Lễ Chúa Ba Ngôi năm B
  'T5002-B': {
    theme: 'Thiên Chúa Ba Ngôi: một Thiên Chúa gần gũi, gọi ta là con và ở cùng ta mọi ngày.',
    first: 'Mô-sê mời dân nhìn lại lịch sử: có bao giờ một dân tộc được Thiên Chúa nói với từ trong lửa mà vẫn sống, được Người chọn và giải thoát như thế? Thiên Chúa của Ít-ra-en không xa vời, mà đã đi vào lịch sử của dân Người.',
    psalm: '"Phúc thay dân tộc mà Chúa chọn làm cơ nghiệp riêng mình."',
    second: 'Ai sống theo Thánh Thần thì là con cái Thiên Chúa. Ta không nhận "tinh thần nô lệ trong sợ hãi" nhưng "tinh thần nghĩa tử", nên được kêu lên: "Abba – lạy Cha!" (c. 15). Thánh Thần làm chứng ta là con, và đồng thừa tự với Đức Kitô (c. 16-17).',
    gospel: 'Trên núi Ga-li-lê, các môn đệ thờ lạy Chúa, "nhưng có ít kẻ còn hoài nghi" (c. 17). Chúa vẫn sai họ đi làm phép rửa "nhân danh Cha, và Con, và Thánh Thần" (c. 19), và hứa: "đây Thầy ở cùng các con mọi ngày cho đến tận thế" (c. 20).',
    connect: 'Thiên Chúa là một, nhưng tự đời đời đã là hiệp thông tình yêu của Ba Ngôi Vị: Cha, Con và Thánh Thần, khác biệt nhau mà cùng một bản tính. Ba Ngôi không phải là ba cách Thiên Chúa xuất hiện hay hành động; chính vì tự nơi mình Thiên Chúa đã là tình yêu, nên Người mới đến với ta như thế: Cha chọn và dẫn dắt dân Người (sách Đệ nhị luật), Con ở cùng ta mọi ngày (Tin Mừng), Thánh Thần cho ta được dự phần vào tương quan con thảo với Cha (thư Rô-ma). Mỗi lần làm dấu Thánh Giá, ta tuyên xưng mầu nhiệm ấy.',
    question: 'Tôi đang sống với Thiên Chúa như một người con, hay vẫn còn "tinh thần nô lệ trong sợ hãi"?',
    action: 'Làm dấu Thánh Giá chậm rãi và ý thức mỗi khi bắt đầu và kết thúc một ngày.'
  },

  // ---------------------------------------------------------------- 30/05/2027 – Mình Máu Thánh Chúa năm B
  'T5003-B': {
    theme: 'Máu Giao Ước: Chúa hiện diện thật trong Thánh Thể và hiến dâng chính mình cho ta.',
    first: 'Dưới chân núi Xi-nai, dân đồng thanh thưa: "Chúng tôi xin thi hành và tuân theo tất cả những điều Chúa đã phán" (c. 7). Mô-sê lấy máu tế vật rảy lên bàn thờ và lên dân để ký kết giao ước: Thiên Chúa và dân Người gắn bó với nhau bằng sự sống.',
    psalm: '"Tôi sẽ lãnh chén cứu độ, và tôi sẽ kêu cầu danh Chúa."',
    second: 'Đức Kitô không vào cung thánh nhờ máu dê bò, "nhưng nhờ chính máu của Người" (c. 12), một lần cho tất cả, và máu ấy tẩy sạch lương tâm ta để phụng sự Thiên Chúa hằng sống.',
    gospel: 'Trong bữa Vượt Qua, Chúa Giê-su cầm bánh: "Các con hãy cầm lấy, này là Mình Ta" (c. 22), rồi cầm chén: "Này là Máu Ta, Máu tân ước sẽ đổ ra cho nhiều người" (c. 24). Bữa ăn kết thúc bằng thánh vịnh, rồi Thầy trò đi lên núi Cây Dầu, nơi cuộc khổ nạn bắt đầu.',
    connect: 'Ba bài đọc cùng nói về máu giao ước: máu tế vật ở Xi-nai, máu Đức Kitô trong thư Do-thái, "Máu tân ước" trong Bữa Tiệc Ly. Với người Do-thái, máu là sự sống. Khi nói "Này là Mình Ta", "Này là Máu Ta", Chúa Giê-su không nói một biểu tượng: dưới hình bánh rượu, chính Người hiện diện thật sự, trọn vẹn. Mỗi Thánh lễ cũng hiện tại hóa hy tế duy nhất của Người trên thập giá, không lặp lại mà làm cho hy tế ấy hiện diện cho ta hôm nay. Từ đó, ta được hiệp thông với Người và với nhau.',
    question: 'Khi thưa Amen lúc rước lễ, tôi có ý thức mình đang nói lại lời của dân ở Xi-nai: "Chúng tôi xin thi hành"?',
    action: 'Tham dự cuộc rước Thánh Thể nếu giáo xứ có; dành một giờ chầu Thánh Thể trong tuần.'
  },

  // ---------------------------------------------------------------- 31/05 – Đức Maria Thăm Viếng (mọi năm)
  'S73105': {
    theme: 'Mẹ vội vã lên đường: niềm vui khi Thiên Chúa ở giữa chúng ta.',
    first: '"Hỡi thiếu nữ Si-on, hãy cất tiếng ca!" (c. 14). Lý do để vui: "Vua Ít-ra-en là Chúa ở giữa ngươi" (c. 15), và chính Thiên Chúa cũng "hân hoan vui mừng vì ngươi" (c. 17).',
    psalm: '"Đấng Thánh cao cả của Ít-ra-en ở giữa ngươi": bài ca của I-sai-a thay cho thánh vịnh.',
    gospel: 'Đức Maria "vội vã ra đi lên miền núi" (c. 39) để thăm bà Ê-li-sa-bét. Nghe lời chào, hài nhi Gio-an nhảy mừng trong lòng mẹ. Bà Ê-li-sa-bét nói: "Phúc cho Bà là kẻ đã tin rằng lời Chúa phán cùng Bà sẽ được thực hiện" (c. 45). Và Đức Maria cất lời: "Linh hồn tôi ngợi khen Chúa" (c. 46).',
    connect: 'Xô-phô-ni-a mời thiếu nữ Si-on vui mừng vì Chúa ở giữa dân; Đức Maria chính là "thiếu nữ Si-on" mang Chúa trong lòng mình đi đến với người khác. Niềm vui ấy lan sang Ê-li-sa-bét và hài nhi Gio-an. Ai mang Chúa trong mình thì không ngồi yên, mà vội vã đi phục vụ.',
    question: 'Có ai đang cần tôi "vội vã" đến thăm, giúp đỡ, hay chỉ đơn giản là chia vui?',
    action: 'Thăm một người họ hàng lâu ngày chưa gặp; khép lại tháng Hoa bằng một chuỗi Mân Côi.'
  },

  // ---------------------------------------------------------------- 04/06/2027 – Thánh Tâm Chúa Giê-su năm B
  'T5004-B': {
    theme: 'Trái Tim bị đâm thâu: tình yêu thổn thức của Thiên Chúa.',
    first: 'Qua ngôn sứ Hô-sê, Thiên Chúa nói như một người cha: "Lúc Israel còn niên thiếu, Ta đã yêu thương nó" (c. 1). Người tập cho con đi, bồng con trên tay, cúi xuống đút cho con ăn. Dù con bất trung, "Quả tim Ta thổn thức trong Ta", và Người không hủy diệt, "vì Ta là Thiên Chúa chứ không phải người phàm" (c. 8-9).',
    psalm: '"Các ngươi sẽ hân hoan múc nước nơi suối Đấng Cứu Độ."',
    second: 'Thánh Phao-lô, "kẻ hèn nhất trong các thánh" (c. 8), quỳ gối cầu xin cho anh em được hiểu thấu tình yêu của Đức Kitô, một tình yêu vượt quá mọi sự hiểu biết, và được đầy tràn sự viên mãn của Thiên Chúa.',
    gospel: 'Trên thập giá, một người lính lấy giáo đâm thủng cạnh sườn Chúa, "và lập tức máu cùng nước chảy ra" (c. 34). Gio-an làm chứng điều mình thấy, để ứng nghiệm lời Kinh Thánh: "Chúng sẽ nhìn vào Đấng chúng đã đâm thâu qua" (c. 37).',
    connect: 'Hô-sê cho thấy trái tim Thiên Chúa "thổn thức" vì con cái; Tin Mừng cho thấy trái tim ấy bị đâm thâu trên thập giá; Thánh vịnh gọi đó là "suối Đấng Cứu Độ"; thư Ê-phê-xô nói tình yêu ấy vượt quá mọi hiểu biết. Theo các Giáo phụ, máu và nước chảy ra từ cạnh sườn là hình ảnh Thánh Thể và Rửa Tội, nguồn mạch sự sống của Hội Thánh.',
    question: 'Tôi có tin rằng trái tim Thiên Chúa "thổn thức" vì tôi, ngay cả khi tôi xa Người?',
    action: 'Dâng mình cho Thánh Tâm Chúa bằng một lời nguyện ngắn; làm một việc đền tạ bằng bác ái.'
  },

  // ---------------------------------------------------------------- Trái Tim Vô Nhiễm Đức Mẹ (thứ Bảy sau Thánh Tâm)
  'S8441': {
    theme: 'Trái tim Mẹ ghi nhớ mọi sự: học nơi Đức Maria cách giữ Lời Chúa.',
    first: '"Tôi hớn hở vui mừng trong Chúa, và lòng tôi hoan hỉ trong Chúa tôi" (c. 10), vì Người đã mặc cho tôi áo cứu độ như cô dâu trang sức ngày cưới. Hội Thánh đọc lời này về Đức Maria.',
    psalm: '"Xin hãy nghe, thưa nương tử, hãy coi và hãy lắng tai."',
    gospel: 'Lạc mất con ba ngày, Đức Maria nói: "Kìa cha Con và mẹ đây, đã đau khổ tìm Con" (c. 48). Câu trả lời của Chúa Giê-su vượt quá hiểu biết của hai ông bà. Mẹ không hiểu hết, nhưng "Maria mẹ Người ghi nhớ những việc đó trong lòng" (c. 51).',
    connect: 'I-sai-a nói về niềm vui của người được Chúa mặc áo cứu độ; Tin Mừng cho thấy trái tim ấy cũng biết lo âu, đau khổ và không hiểu. Trái tim vô nhiễm không phải là trái tim không đau, mà là trái tim luôn giữ Lời Chúa, kể cả khi chưa hiểu.',
    question: 'Khi gặp điều không hiểu trong đời, tôi có biết ghi nhớ trong lòng và tiếp tục tin như Mẹ?',
    action: 'Dâng gia đình cho Trái Tim Đức Mẹ; đọc chậm một kinh Kính Mừng trước khi ngủ.'
  },

  // ---------------------------------------------------------------- 06/06/2027 – CN X Thường Niên năm B
  'T5100-B': {
    theme: 'Ai thi hành ý muốn Thiên Chúa là gia đình của Chúa Giê-su.',
    first: 'Sau khi ăn trái cấm, con người trốn tránh. Thiên Chúa đi tìm: "Ngươi ở đâu?" (c. 9). Rồi người đàn ông đổ lỗi cho người đàn bà, người đàn bà đổ lỗi cho con rắn. Tội lỗi làm đổ vỡ mọi tương quan. Nhưng Thiên Chúa cũng hứa sự thù nghịch giữa con rắn và dòng dõi người nữ (c. 15).',
    psalm: '"Chúa luôn luôn từ ái một niềm, ơn cứu chuộc nơi Người chan chứa": từ vực sâu, ta vẫn có thể kêu lên Chúa.',
    second: '"Tôi đã tin, nên tôi mới nói" (c. 13). Dù con người bên ngoài hao mòn, con người bên trong được đổi mới mỗi ngày, vì ta hướng về những gì không thấy, là điều vĩnh cửu.',
    gospel: 'Thân nhân Chúa Giê-su đến bắt Người vì nghĩ "Người đã mất trí" (c. 21); các kinh sư nói Người dựa thế quỷ vương. Chúa đáp: nhà nào tự chia rẽ thì không đứng vững. Rồi khi có người báo mẹ và anh em đang tìm, Người nói: "Ai thi hành ý muốn của Thiên Chúa, người ấy là anh em chị em tôi, là mẹ tôi" (c. 35).',
    connect: 'Sách Sáng thế cho thấy tội lỗi chia rẽ con người với Thiên Chúa và với nhau; Tin Mừng cho thấy Chúa Giê-su đến để trói "kẻ mạnh" và quy tụ một gia đình mới. Đức Maria là người đầu tiên thuộc gia đình ấy, không chỉ vì là mẹ, mà vì đã thi hành ý Chúa trọn vẹn.',
    question: 'Khi có lỗi, tôi có thói quen đổ lỗi như A-đam và E-và không? Tôi có đang thật sự "thi hành ý muốn của Thiên Chúa"?',
    action: 'Nhận lỗi về một việc mình đã làm sai thay vì tìm cách bào chữa.'
  },

  // ---------------------------------------------------------------- 13/06/2027 – CN XI Thường Niên năm B
  'T5110-B': {
    theme: 'Nước Thiên Chúa lớn lên từ những khởi đầu bé nhỏ.',
    first: 'Thiên Chúa sẽ ngắt một chồi non và trồng trên núi cao, chồi ấy sẽ thành cây hương bá huy hoàng cho muông chim nương náu. "Ta hạ thấp cây cao và nâng cao cây thấp" (c. 24): Thiên Chúa làm những điều lớn lao từ cái nhỏ bé.',
    psalm: '"Lạy Chúa, hạnh phúc thay được tạ ơn Ngài": người công chính như cây chà là xanh tốt, già vẫn sinh hoa trái.',
    second: '"Chúng ta tiến bước nhờ lòng tin chứ không phải nhờ được thấy Chúa" (c. 7). Dù ở đâu, ta chỉ có một ước muốn: làm đẹp lòng Người.',
    gospel: 'Nước Thiên Chúa giống như hạt cải, "là loại nhỏ nhất trong các hạt giống trên mặt đất" (c. 31), nhưng khi gieo rồi thì mọc lên lớn hơn mọi thứ rau cỏ, "đến nỗi chim trời có thể làm tổ dưới bóng" (c. 32).',
    connect: 'Chồi non của Ê-dê-ki-en và hạt cải của Tin Mừng nói cùng một điều: Thiên Chúa làm việc âm thầm, từ những gì bé nhỏ, và kết quả vượt quá mong đợi, trở thành nơi trú ẩn cho nhiều người. Thư Cô-rin-tô nhắc ta bước đi trong đức tin, khi chưa thấy kết quả.',
    question: 'Tôi có nản lòng vì những việc lành mình làm xem ra quá nhỏ bé và chậm thấy kết quả?',
    action: 'Kiên nhẫn làm một việc tốt nhỏ mỗi ngày trong tuần, và phó thác kết quả cho Chúa.'
  },

  // ---------------------------------------------------------------- 20/06/2027 – CN XII Thường Niên năm B
  'T5120-B': {
    theme: '"Người là ai mà cả gió lẫn biển cũng đều vâng lệnh Người?": tin Chúa giữa bão tố.',
    first: 'Từ cơn gió lốc, Thiên Chúa đáp lời Gióp: chính Người đặt giới hạn cho biển cả, "Ngươi chảy đến đây mà thôi" (c. 11). Gióp không nhận được lời giải thích cho nỗi khổ, nhưng nhận ra Thiên Chúa vẫn làm chủ mọi sự.',
    psalm: '"Hãy tán tạ Chúa, bởi đức từ bi Người còn muôn thuở": những người đi biển kêu cầu Chúa giữa phong ba, và Người làm cho sóng lặng.',
    second: '"Lòng mến của Đức Kitô thúc bách chúng ta" (c. 14). Người đã chết cho mọi người, để những ai đang sống "không còn sống cho chính mình nữa" (c. 15).',
    gospel: 'Giữa cơn bão, Chúa Giê-su ngủ ở đàng lái. Các môn đệ kêu: "Thưa Thầy, chúng con chết mất mà Thầy không quan tâm đến sao?" (c. 38). Người đe gió: "Hãy im đi, hãy lặng đi" (c. 39), rồi hỏi: "Sao các con sợ hãi thế? Các con không có đức tin ư?" (c. 40).',
    connect: 'Sách Gióp nói chỉ Thiên Chúa làm chủ biển cả; Tin Mừng cho thấy Chúa Giê-su làm điều chỉ Thiên Chúa làm được, nên các môn đệ hỏi: "Người là ai?" Bão tố không biến mất khỏi đời người tín hữu, nhưng Chúa ở trong cùng một con thuyền với ta.',
    question: 'Trong "cơn bão" hiện tại, tôi có nghĩ Chúa đang "ngủ" và không quan tâm đến tôi?',
    action: 'Viết ra nỗi lo lớn nhất của mình và đặt nó dưới chân thánh giá trong giờ cầu nguyện.'
  },

  // ---------------------------------------------------------------- 24/06 – Sinh nhật Thánh Gioan Tẩy Giả (mọi năm)
  'S72406': {
    theme: '"Tên nó là Gioan": Thiên Chúa tỏ lòng thương xót qua một con trẻ.',
    first: '"Chúa đã kêu gọi tôi từ khi tôi còn trong lòng mẹ" (c. 1). Người Tôi Trung được chọn trước khi sinh ra, và được sai làm ánh sáng cho muôn dân. Lời này ứng nghiệm nơi Gioan.',
    psalm: '"Con ca ngợi Chúa, vì con được tạo thành cách lạ lùng": mỗi sự sống từ trong lòng mẹ đều được Chúa biết đến.',
    second: 'Thánh Phao-lô kể lịch sử cứu độ từ Đa-vít đến Đức Giê-su, và vai trò của Gioan: người dọn đường, tự nhận mình không xứng cởi dép cho Đấng đến sau.',
    gospel: 'Hàng xóm muốn đặt tên con trẻ theo tên cha, nhưng bà Ê-li-sa-bét nói nó sẽ tên là Gioan, tên này nghĩa là Thiên Chúa thương xót. Ông Da-ca-ri-a viết: "Tên nó là Gioan" (c. 63), và ông nói được ngay. Mọi người tự hỏi: "Con trẻ này rồi sẽ nên thế nào?" (c. 66).',
    connect: 'I-sai-a nói về người được gọi từ lòng mẹ; Tin Mừng kể Gioan chào đời với một tên gọi Chúa chọn; sách Công vụ cho thấy sứ mạng của ông: chỉ về Đức Giê-su. Gioan là vị thánh duy nhất (cùng với Đức Maria) được Hội Thánh mừng cả ngày sinh nhật, vì ông đã được thánh hóa từ trong lòng mẹ.',
    question: 'Tôi có tin rằng Chúa có một chương trình cho đời tôi ngay từ khi tôi còn trong lòng mẹ?',
    action: 'Cầu nguyện cho các thai nhi và các gia đình đang chờ đón con; tạ ơn Chúa vì cha mẹ đã sinh ra mình.'
  },

  // ---------------------------------------------------------------- 27/06/2027 – CN XIII Thường Niên năm B
  'T5130-B': {
    theme: 'Chúa muốn ta được sống: "Ông đừng sợ, hãy cứ tin".',
    first: '"Thiên Chúa không tạo dựng sự chết, chẳng vui mừng khi người sống phải chết" (1, 13). Người dựng nên con người "giống hình ảnh Chúa, để sống vĩnh viễn" (2, 23).',
    psalm: '"Lạy Chúa, con ca tụng Chúa vì đã giải thoát con": chiều tối có khóc lóc, nhưng sáng ra lại reo mừng.',
    second: 'Đức Kitô "mặc dù giàu sang, Người đã nên thân phận nghèo khó, để nhờ việc nghèo khó của Người, anh em nên giàu có" (c. 9). Vì thế, người dư giả hãy chia sẻ để có sự đồng đều.',
    gospel: 'Hai người tìm đến Chúa: ông Gia-i-rô có con gái hấp hối, và một người phụ nữ bị băng huyết mười hai năm. Bà tự nhủ: "Miễn sao tôi chạm tới áo Người thì tôi sẽ được lành" (c. 28). Chúa nói: "Hỡi con, đức tin của con đã chữa con" (c. 34). Khi tin báo đứa bé đã chết, Người bảo ông Gia-i-rô: "Ông đừng sợ, hãy cứ tin" (c. 36), rồi cầm tay em: "Talitha, Koumi" (c. 41).',
    connect: 'Sách Khôn ngoan nói Thiên Chúa không muốn sự chết; Tin Mừng cho thấy Chúa Giê-su chữa lành và cho sống lại. Thư Cô-rin-tô mở rộng ra: sự sống Chúa ban cũng được thông truyền khi ta chia sẻ với người thiếu thốn. Một người phụ nữ bị loại trừ và một bé gái mười hai tuổi: Chúa dừng lại cho cả hai.',
    question: 'Tôi có dám "chạm" đến Chúa với nỗi đau mình giấu kín nhiều năm? Ai đang cần sự chia sẻ từ phần dư giả của tôi?',
    action: 'Thăm hoặc cầu nguyện cho một người bệnh nặng; chia sẻ một phần dư giả cho người túng thiếu.'
  },

  // ---------------------------------------------------------------- 29/06 – Thánh Phê-rô và Phao-lô (mọi năm)
  'S72906': {
    theme: 'Hai cột trụ của Hội Thánh: một người được trao chìa khóa, một người chạy đến cùng đường.',
    first: 'Vua Hê-rô-đê giết Gia-cô-bê và bắt giam Phê-rô, "nhưng Hội thánh vẫn luôn luôn cầu nguyện cùng Chúa cho người" (c. 5). Trong đêm, thiên thần đến giải thoát Phê-rô khỏi xiềng xích.',
    psalm: '"Chúa đã cứu tôi khỏi điều lo sợ."',
    second: 'Lúc tuổi già, Phao-lô nhìn lại đời mình: "Cha đã chiến đấu trong trận chiến chính nghĩa, đã chạy đến cùng đường và đã giữ vững đức tin" (c. 7). Dù bị bỏ rơi, ông vẫn biết "có Chúa phù hộ giúp sức cho cha" (c. 17).',
    gospel: 'Phê-rô tuyên xưng: "Thầy là Đức Kitô, Con Thiên Chúa hằng sống" (c. 16). Chúa đáp: "Con là Đá, trên đá này Thầy sẽ xây Hội Thánh của Thầy" (c. 18), và trao cho ông "chìa khoá nước trời" (c. 19).',
    connect: 'Phê-rô và Phao-lô rất khác nhau: một ngư phủ chối Thầy rồi trở về, một người bắt đạo rồi trở thành Tông đồ dân ngoại. Cả hai đều được Chúa giải thoát, phù trợ, và cùng tử đạo tại Rô-ma. Hội Thánh được xây trên đức tin của các ngài và trên lời cầu nguyện của cộng đoàn.',
    question: 'Lúc cuối đời, tôi mong mình có thể nói như Phao-lô: "đã giữ vững đức tin"? Tôi có cầu nguyện cho các mục tử như Hội Thánh xưa cầu cho Phê-rô?',
    action: 'Cầu nguyện cho Đức Giáo hoàng; đóng góp cho quỹ Đồng xu Thánh Phê-rô nếu giáo xứ tổ chức.'
  },

  // ---------------------------------------------------------------- 03/07 – Thánh Tô-ma Tông đồ (mọi năm)
  'S70307': {
    theme: '"Lạy Chúa con, lạy Thiên Chúa của con!": từ nghi ngờ đến tuyên xưng.',
    first: 'Anh em "không còn là khách trọ và khách qua đường nữa, nhưng là người đồng hương với các Thánh và là người nhà của Thiên Chúa" (c. 19), được xây dựng trên nền tảng các Tông đồ, có Đức Kitô làm Đá góc (c. 20).',
    psalm: '"Hãy đi rao giảng Tin Mừng khắp thế gian": theo truyền thống, Thánh Tô-ma đã rao giảng Tin Mừng đến tận Ấn Độ.',
    gospel: 'Tô-ma không tin lời các bạn: "Nếu tôi không nhìn thấy vết đinh ở tay Người, nếu tôi không thọc ngón tay vào lỗ đinh, nếu tôi không thọc bàn tay vào cạnh sườn Người thì tôi không tin" (c. 25). Tám ngày sau, Chúa đến và mời ông chạm vào vết thương. Tô-ma thưa: "Lạy Chúa con, lạy Thiên Chúa của con!" (c. 28), lời tuyên xưng mạnh mẽ nhất trong Tin Mừng.',
    connect: 'Tô-ma, người nghi ngờ, trở thành một trong những "nền tảng các Tông đồ" mà thư Ê-phê-xô nói tới. Chúa không loại ông vì nghi ngờ, mà đến gặp ông. Nghi ngờ thành thật có thể dẫn đến một đức tin sâu xa hơn.',
    question: 'Tôi có dám nói thật với Chúa về những nghi ngờ của mình, như Tô-ma?',
    action: 'Đọc thầm lời "Lạy Chúa con, lạy Thiên Chúa của con" khi linh mục nâng Mình Thánh Chúa trong Thánh lễ.'
  },

  // ---------------------------------------------------------------- 04/07/2027 – CN XIV Thường Niên năm B
  'T5140-B': {
    theme: 'Sức mạnh của Thiên Chúa được tỏ bày trong sự yếu đuối.',
    first: 'Ê-dê-ki-en được sai đến với một dân "dầy mặt cứng lòng": "Hoặc chúng nghe, hoặc chúng không nghe", nhưng "chúng sẽ biết rằng giữa chúng có một tiên tri" (c. 5). Ngôn sứ không được hứa thành công, chỉ được sai đi.',
    psalm: '"Mắt chúng con nhìn vào Chúa, cho tới khi Người thương xót chúng con."',
    second: 'Phao-lô xin Chúa cất đi "cái dằm" đâm vào thịt mình. Chúa đáp: "Ơn Ta đủ cho ngươi, vì sức mạnh của Ta được tỏ bày trong sự yếu đuối" (c. 9). Từ đó ông nói: "khi tôi yếu đuối, chính là lúc tôi mạnh mẽ" (c. 10).',
    gospel: 'Về quê, người làng sửng sốt rồi vấp ngã: "Ông này chẳng phải bác thợ mộc con bà Maria" sao? (c. 3). Chúa nói: "Không một tiên tri nào mà không bị khinh bỉ ở quê hương" (c. 4), và "Người ngạc nhiên vì họ cứng lòng tin" (c. 6).',
    connect: 'Ê-dê-ki-en, Phao-lô và Chúa Giê-su đều trải qua sự từ chối và yếu đuối. Người làng Na-da-rét vấp ngã vì Chúa quá bình thường; Phao-lô học được rằng sức mạnh Chúa tỏ ra trong cái yếu. Thiên Chúa thường đến qua những gì quen thuộc, tầm thường, đến nỗi ta dễ bỏ qua.',
    question: '"Cái dằm" của tôi là gì? Tôi có để định kiến về người quen khiến mình không nghe được lời Chúa qua họ?',
    action: 'Lắng nghe một người thân trong gia đình với sự chú tâm trọn vẹn, như thể Chúa đang nói qua họ.'
  },

  // ---------------------------------------------------------------- 11/07/2027 – CN XV Thường Niên năm B
  'T5150-B': {
    theme: 'Được chọn và được sai đi, mang theo rất ít nhưng tin cậy nhiều.',
    first: 'Bị đuổi khỏi Bê-thel, ngôn sứ A-mốt đáp: "Tôi không phải là tiên tri, cũng không phải là con của tiên tri" (c. 14), chỉ là người chăn bò và hái sung, nhưng Chúa đã gọi và sai ông đi.',
    psalm: '"Lạy Chúa, xin tỏ lòng từ bi Chúa cho chúng con, và ban ơn cứu rỗi cho chúng con."',
    second: 'Thiên Chúa "đã chọn chúng ta trong Người trước khi tạo dựng thế gian, để chúng ta được nên thánh thiện và tinh tuyền trước mặt Ngài trong tình yêu thương" (c. 4). Mọi ơn gọi bắt đầu từ sự chọn lựa đầy yêu thương ấy.',
    gospel: 'Chúa sai Mười Hai Tông đồ "từng hai người" (c. 7), dặn đừng mang gì ngoài cây gậy: không bánh, không bị, không tiền. Các ông ra đi rao giảng sám hối, trừ quỷ và chữa lành.',
    connect: 'A-mốt là người thường được Chúa gọi; các Tông đồ được sai đi với hai bàn tay gần như trống trơn; thư Ê-phê-xô cho biết lý do của mọi ơn gọi: Thiên Chúa đã chọn ta từ trước muôn đời. Người được sai đi không cậy vào hành trang, mà cậy vào Đấng sai mình.',
    question: 'Tôi có đang mang quá nhiều hành lý (lo toan, tiện nghi) khiến mình ngại ra đi làm chứng cho Chúa?',
    action: 'Cùng một người bạn hay người thân làm một việc tông đồ nhỏ: thăm người neo đơn, giúp một gia đình khó khăn.'
  }
});

// Lễ Trái Tim Vô Nhiễm có tab "Bài đọc tùy chọn" trùng bài đọc với tab lễ nhớ
window.MEDITATIONS['O8441'] = window.MEDITATIONS['S8441'];

Object.assign(window.MEDITATIONS, {

  // ---------------------------------------------------------------- 18/07/2027 – CN XVI Thường Niên năm B
  'T5160-B': {
    theme: 'Chúa chạnh lòng thương đoàn chiên không người chăn.',
    first: '"Khốn cho các mục tử làm tản mát và xâu xé đoàn chiên Ta" (c. 1). Khi các mục tử bất trung, chính Thiên Chúa hứa sẽ quy tụ đoàn chiên và gây cho Đa-vít "một mầm giống công chính" (c. 5).',
    psalm: '"Chúa chăn nuôi tôi, tôi chẳng thiếu thốn chi."',
    second: 'Những kẻ xưa kia ở xa, nay "đã nên gần nhờ bửu huyết của Người" (c. 13). "Chính Người là sự bình an của chúng ta", Đấng "đã phá đổ bức tường ngăn cách" (c. 14).',
    gospel: 'Các Tông đồ đi truyền giáo về, Chúa bảo: "Các con hãy lui vào nơi vắng vẻ mà nghỉ ngơi một chút" (c. 31). Nhưng đám đông đã đến trước. Thấy họ, Người "động lòng thương, vì họ như đàn chiên không người chăn" (c. 34), và Người dạy dỗ họ nhiều điều.',
    connect: 'Giê-rê-mi-a hứa Thiên Chúa sẽ chăn dắt đoàn chiên bị bỏ rơi; Tin Mừng cho thấy lời hứa ấy nơi lòng thương xót của Chúa Giê-su. Thư Ê-phê-xô cho thấy Mục Tử ấy quy tụ cả những người "ở xa". Chúa quan tâm cả đến sự nghỉ ngơi của môn đệ, nhưng lòng thương xót của Người đi trước kế hoạch riêng.',
    question: 'Tôi có biết dành thời gian "lui vào nơi vắng vẻ" với Chúa? Và khi kế hoạch bị đảo lộn vì người cần mình, tôi phản ứng thế nào?',
    action: 'Dành một khoảng nghỉ ngơi thật sự với Chúa trong tuần này: một buổi tĩnh tâm ngắn hay một giờ cầu nguyện yên tĩnh.'
  },

  // ---------------------------------------------------------------- 22/07 – Thánh Ma-ri-a Ma-đa-lê-na (mọi năm)
  'S72207': {
    theme: 'Người đi tìm Chúa trong nước mắt trở thành sứ giả của Phục Sinh.',
    first: '"Tôi đã tìm kiếm người tôi yêu" (c. 1). Người thiếu nữ trong sách Diễm Ca đi khắp phố phường tìm người mình yêu, cho đến khi gặp được. Đó là hình ảnh của tâm hồn khao khát Thiên Chúa.',
    psalm: '"Lạy Chúa là Thiên Chúa con, linh hồn con khao khát Chúa."',
    gospel: 'Ma-ri-a Ma-đa-lê-na đứng khóc bên mồ, tưởng Chúa là người giữ vườn. Khi Chúa gọi: "Ma-ri-a", bà nhận ra và thưa: "Rabboni" (c. 16). Chúa sai bà đi báo tin cho các môn đệ.',
    connect: 'Diễm Ca và Tin Mừng gặp nhau: người đi tìm và cuối cùng gặp được người mình yêu. Truyền thống gọi Thánh Ma-ri-a Ma-đa-lê-na là Tông đồ của các Tông đồ, vì bà là người đầu tiên được Chúa Phục Sinh sai đi loan báo.',
    question: 'Tôi có khao khát tìm Chúa như người tìm người mình yêu? Tôi có nhận ra khi Chúa gọi đúng tên mình?',
    action: 'Kể cho một người khác nghe về một lần mình cảm nghiệm được Chúa trong đời.'
  },

  // ---------------------------------------------------------------- 25/07/2027 – CN XVII Thường Niên năm B
  'T5170-B': {
    theme: 'Năm chiếc bánh và hai con cá: Chúa làm phép lạ từ cái ít ta dâng.',
    first: 'Ngôn sứ Ê-li-sê nhận hai mươi chiếc bánh và bảo dọn cho một trăm người ăn. Người đầy tớ nghi ngờ, nhưng "người ta ăn rồi mà sẽ còn dư" (c. 43), đúng như lời Chúa phán.',
    psalm: '"Lạy Chúa, Chúa mở rộng bàn tay ra, và thi ân cho chúng con được no nê."',
    second: 'Thánh Phao-lô khuyên sống "khiêm nhượng, hiền hậu, nhẫn nại, chịu đựng nhau trong đức ái" (c. 2), vì "chỉ có một Chúa, một đức tin, một phép rửa" (c. 5).',
    gospel: 'Trước đám đông năm ngàn người, Phi-líp-phê tính toán: "Hai trăm bạc bánh cũng không đủ" (c. 7). An-rê chỉ có một bé trai với "năm chiếc bánh lúa mạch và hai con cá" (c. 9). Chúa cầm lấy, tạ ơn, phân phát, và mọi người ăn no nê. Người còn dặn: "Hãy thu lấy những miếng còn lại, kẻo phí đi" (c. 12).',
    connect: 'Ê-li-sê và Chúa Giê-su đều nuôi đám đông bằng một ít bánh, và đều còn dư. Từ Chúa Nhật này, suốt năm tuần, Tin Mừng Gio-an chương 6 sẽ dẫn ta từ phép lạ bánh hóa nhiều đến Bánh Hằng Sống là Thánh Thể. Thư Ê-phê-xô nhắc rằng một tấm bánh làm nên một thân thể hiệp nhất.',
    question: '"Năm chiếc bánh" của tôi là gì: chút thời gian, chút tài năng, chút của cải? Tôi có dám trao cho Chúa dù thấy nó "thấm vào đâu"?',
    action: 'Chia sẻ một phần bữa ăn hoặc tiền chợ cho người đói nghèo; tránh lãng phí thức ăn trong gia đình.'
  },

  // ---------------------------------------------------------------- 25/07 – Thánh Gia-cô-bê Tông đồ (mọi năm)
  'S72507': {
    theme: 'Uống chén của Chúa: làm lớn là phục vụ.',
    first: '"Chúng ta chứa đựng kho tàng ấy trong những bình sành" (c. 7). Các Tông đồ "chịu khổ cực tư bề, nhưng không bị đè bẹp", vì quyền lực ấy là của Thiên Chúa (c. 8).',
    psalm: '"Ai gieo trong lệ sầu, sẽ gặt trong hân hoan."',
    gospel: 'Mẹ của Gia-cô-bê và Gio-an xin cho hai con được ngồi bên hữu bên tả Chúa. Chúa hỏi: "Các ngươi có thể uống chén mà ít nữa đây ta sắp uống chăng?" (c. 22). Rồi Người dạy: "ai muốn làm lớn, thì hãy phục vụ các con" (c. 26), vì Con Người đến "để phục vụ và phó mạng sống làm giá chuộc cho nhiều người" (c. 28).',
    connect: 'Gia-cô-bê từng mơ chỗ ngồi danh dự, nhưng đã thật sự "uống chén" của Thầy: ông là Tông đồ đầu tiên tử đạo. Thư Cô-rin-tô cho thấy sức mạnh của người Tông đồ nằm ở chỗ biết mình là bình sành chứa kho tàng của Chúa.',
    question: 'Tôi tìm chỗ ngồi danh dự hay tìm cơ hội phục vụ?',
    action: 'Nhận một việc phục vụ không ai muốn làm trong gia đình hay nơi làm việc.'
  },

  // ---------------------------------------------------------------- 01/08/2027 – CN XVIII Thường Niên năm B
  'T5180-B': {
    theme: '"Chính Ta là bánh ban sự sống": tìm Chúa vì chính Người.',
    first: 'Dân Ít-ra-en kêu trách trong sa mạc, tiếc "nồi thịt" ở Ai-cập. Thiên Chúa vẫn cho "bánh từ trời rơi xuống như mưa" (c. 4), mỗi ngày đủ dùng, để dạy dân biết tín thác.',
    psalm: '"Chúa đã ban cho họ được bánh bởi trời."',
    second: 'Thánh Phao-lô khuyên "hãy lột bỏ con người cũ" (c. 22) và mặc lấy con người mới, được tạo dựng theo hình ảnh Thiên Chúa.',
    gospel: 'Đám đông tìm Chúa Giê-su "vì các ngươi đã được ăn bánh no nê" (c. 26). Chúa mời họ tìm "của ăn tồn tại cho đến cuộc sống muôn đời" (c. 27), và tuyên bố: "Chính Ta là bánh ban sự sống. Ai đến với Ta, sẽ không hề đói; ai tin vào Ta, sẽ không hề khát bao giờ" (c. 35).',
    connect: 'Manna nuôi dân trong sa mạc từng ngày; Chúa Giê-su là Bánh thật nuôi ta cho đời đời. Dân Ít-ra-en tiếc nồi thịt Ai-cập, đám đông tìm bánh no bụng: cả hai cần được dẫn từ nhu cầu vật chất đến cơn đói sâu xa hơn. Thư Ê-phê-xô nói đó là việc lột bỏ con người cũ.',
    question: 'Tôi tìm Chúa vì những gì Người ban cho tôi, hay vì chính Người?',
    action: 'Rước lễ với lòng ý thức hơn; trước khi rước lễ, thầm thưa như đám đông: "Thưa Ngài, xin cho chúng tôi bánh đó luôn mãi".'
  },

  // ---------------------------------------------------------------- 06/08 – Chúa Hiển Dung (mọi năm; dữ liệu chưa có toàn văn)
  'S70608': {
    theme: 'Vinh quang trên núi: nghe lời Con yêu dấu.',
    first: 'Ngôn sứ Đa-ni-en thấy Đấng Lão Thành ngự trên ngai, và một vị giống như Con Người đến trên mây trời, được trao quyền thống trị muôn đời. Hình ảnh ấy được ứng nghiệm nơi Chúa Giê-su.',
    psalm: 'Thánh vịnh 96 ca ngợi Chúa là Vua, uy linh vượt trên cả địa cầu.',
    second: 'Thánh Phê-rô làm chứng: các ông không theo những chuyện hoang đường, nhưng đã tận mắt thấy vinh quang Chúa và nghe tiếng từ trời khi ở với Người trên núi thánh. Lời ngôn sứ như ngọn đèn chiếu sáng nơi tối tăm.',
    gospel: 'Trên núi cao, Chúa Giê-su biến đổi hình dạng trước mặt Phê-rô, Gia-cô-bê và Gio-an. Tiếng từ đám mây phán: đây là Con Ta yêu dấu, hãy nghe lời Người. Khi xuống núi, Chúa dặn các ông đừng nói với ai cho đến khi Con Người sống lại.',
    connect: 'Đa-ni-en thấy trước vinh quang của Con Người; Tin Mừng cho thấy vinh quang ấy chiếu tỏa nơi Chúa Giê-su; Phê-rô, người tận mắt chứng kiến, làm chứng cho các tín hữu sau này. Vinh quang trên núi giúp các môn đệ đủ sức đi qua thập giá.',
    question: 'Trong những ngày tối tăm, tôi có giữ ngọn đèn Lời Chúa để soi đường không?',
    action: 'Đọc trình thuật Hiển Dung trong Tin Mừng (Mt 17, 1-9) và dừng lại ở lời Chúa Cha mời ta nghe lời Con yêu dấu.'
  },

  // ---------------------------------------------------------------- 08/08/2027 – CN XIX Thường Niên năm B
  'T5190-B': {
    theme: 'Bánh cho người mệt mỏi trên đường: "Hãy chỗi dậy mà ăn".',
    first: 'Ngôn sứ Ê-li-a kiệt sức, ngồi dưới gốc cây và xin chết: "Lạy Chúa, đã đủ rồi, xin cất mạng sống con đi" (c. 4). Thiên thần đánh thức ông: "Hãy chỗi dậy mà ăn" (c. 5). Nhờ sức của bánh ấy, ông đi bốn mươi ngày đến núi của Thiên Chúa.',
    psalm: '"Các bạn hãy nếm thử và hãy nhìn coi, cho biết Chúa thiện hảo nhường bao."',
    second: '"Anh em chớ làm phiền hà Thánh Thần của Thiên Chúa" (4, 30). Hãy loại bỏ mọi gay gắt, tức giận; "hãy thương xót và tha thứ cho nhau, như Thiên Chúa đã tha thứ cho anh em trong Đức Kitô" (4, 32).',
    gospel: 'Người Do-thái thì thầm: ông này "chẳng phải là Giêsu, con ông Giuse sao?" Chúa đáp: không ai đến được với Người nếu Chúa Cha không lôi kéo. Rồi Người nói: "Ta là bánh hằng sống từ trời xuống. Ai ăn bánh này, sẽ sống đời đời."',
    connect: 'Ê-li-a nhận bánh để có sức đi tiếp; Chúa Giê-su tự giới thiệu là Bánh hằng sống cho cuộc hành trình về sự sống đời đời. Thư Ê-phê-xô cho thấy người được nuôi bằng Bánh ấy phải sống hiền hậu và tha thứ. Thánh Thể là lương thực cho người mỏi mệt, không phải phần thưởng cho người hoàn hảo.',
    question: 'Có lúc nào tôi muốn nói như Ê-li-a: "đã đủ rồi"? Tôi có để Chúa nuôi dưỡng mình bằng Thánh Thể những lúc ấy?',
    action: 'Tha thứ cho một người đã làm mình tổn thương, như Thiên Chúa đã tha thứ cho mình.'
  },

  // ---------------------------------------------------------------- 10/08 – Thánh Lô-ren-xô (mọi năm)
  'S71008': {
    theme: 'Hạt lúa mì gieo xuống đất: người phó tế cho đi cả mạng sống.',
    first: '"Ai gieo ít thì gặt ít; ai gieo nhiều thì gặt nhiều" (c. 6). "Thiên Chúa yêu thương kẻ cho cách vui lòng" (c. 7).',
    psalm: '"Phúc đức cho người biết xót thương và cho vay."',
    gospel: '"Nếu hạt lúa mì rơi xuống đất mà không thối đi, thì nó chỉ trơ trọi một mình, nhưng nếu nó thối đi, thì nó sinh nhiều bông hạt" (c. 24).',
    connect: 'Thánh Lô-ren-xô, phó tế Rô-ma, lo việc giúp người nghèo. Theo truyền thống, khi bị đòi nộp kho tàng của Hội Thánh, ngài dẫn đến những người nghèo và nói: đây là kho tàng của Hội Thánh. Ngài đã gieo nhiều, cho cách vui lòng, và cuối cùng hiến cả mạng sống như hạt lúa mì.',
    question: 'Tôi có nhìn người nghèo như kho tàng của Hội Thánh không?',
    action: 'Cho đi một điều gì đó "cách vui lòng" hôm nay, không tính toán.'
  },

  // ---------------------------------------------------------------- 15/08 – Đức Mẹ Hồn Xác Lên Trời (mọi năm)
  'S71508': {
    theme: 'Mẹ được đưa về trời cả hồn lẫn xác: niềm hy vọng cho chúng ta.',
    first: 'Một điềm lạ vĩ đại trên trời: "một người nữ mặc áo mặt trời, chân đạp mặt trăng, đầu đội triều thiên mười hai ngôi sao" (12, 1). Con rồng muốn nuốt đứa trẻ, nhưng con của Bà được đưa lên cùng Thiên Chúa.',
    psalm: '"Hoàng Hậu đứng bên hữu Đức Vua, mặc đồ trang điểm vàng ròng."',
    second: 'Đức Kitô sống lại là "hoa quả đầu mùa" (c. 20). Ai nấy theo thứ tự của mình: trước hết là Đức Kitô, rồi đến những kẻ thuộc về Người (c. 23).',
    gospel: 'Đức Maria vội vã đi thăm bà Ê-li-sa-bét và cất lên bài ca: "Linh hồn tôi ngợi khen Chúa". Thiên Chúa đã đoái nhìn phận hèn tớ nữ, và "Đấng toàn năng đã làm cho tôi những sự trọng đại".',
    connect: 'Thư Cô-rin-tô nói Đức Kitô là hoa quả đầu mùa, rồi đến những ai thuộc về Người; Đức Maria là người đầu tiên theo Con vào vinh quang trọn vẹn. Sách Khải Huyền cho thấy người nữ ấy chiến thắng con rồng; Tin Mừng cho thấy bí quyết của Mẹ: khiêm hạ và tin. Điều Thiên Chúa làm cho Mẹ là điều Người hứa cho chúng ta.',
    question: 'Niềm tin vào sự sống lại của thân xác có thay đổi cách tôi đối xử với thân xác mình và người khác?',
    action: 'Đọc chậm kinh Magnificat (Lc 1, 46-55); cầu nguyện cho những người thân đã qua đời.'
  },

  // ---------------------------------------------------------------- CN XX Thường Niên năm B (năm 2027 trùng lễ Đức Mẹ Lên Trời)
  'T5200-B': {
    theme: 'Bàn tiệc của Sự Khôn Ngoan: ai ăn Thịt và uống Máu Chúa thì có sự sống.',
    first: 'Sự Khôn Ngoan xây nhà, dọn tiệc, và mời: "Các ngươi hãy đến ăn bánh của ta, và uống rượu ta đã pha cho các ngươi" (c. 5). Lời mời dành cho những người đơn sơ.',
    psalm: '"Các bạn hãy nếm thử và hãy nhìn coi, cho biết Chúa thiện hảo nhường bao."',
    second: '"Anh em hãy xét coi phải ăn ở thế nào cho thận trọng, đừng như những kẻ dại dột, song như những người khôn ngoan: biết lợi dụng thời giờ" (c. 15-16), và hãy dâng lời tạ ơn Thiên Chúa luôn mãi.',
    gospel: 'Chúa Giê-su nói: "bánh Ta sẽ ban, chính là thịt Ta, để cho thế gian được sống". Người Do-thái tranh luận, nhưng Chúa càng khẳng định: "thịt Ta thật là của ăn, và máu Ta thật là của uống". Ai ăn Thịt và uống Máu Người thì ở trong Người và Người ở trong kẻ ấy.',
    connect: 'Sách Châm ngôn mời đến bàn tiệc của Sự Khôn Ngoan; Tin Mừng cho thấy chính Chúa Giê-su là lương thực của bàn tiệc ấy. Thư Ê-phê-xô nói người khôn ngoan biết sống tạ ơn. Chữ Thánh Thể (Eucharistia) có nghĩa là tạ ơn.',
    question: 'Tôi có xem Thánh lễ như một bàn tiệc Chúa mời, hay chỉ là một bổn phận?',
    action: 'Dâng lời tạ ơn Chúa trước và sau mỗi bữa ăn trong tuần này.'
  },

  // ---------------------------------------------------------------- 22/08/2027 – CN XXI Thường Niên năm B
  'T5210-B': {
    theme: '"Lạy Thầy, chúng con sẽ đi theo ai?": chọn lựa Chúa.',
    first: 'Tại Si-khem, ông Giô-suê đặt dân trước sự chọn lựa: tôn thờ ai? Ông tuyên bố: "Phần tôi và gia đình tôi, chúng tôi sẽ tôn thờ Chúa" (c. 15), và dân cũng chọn Chúa.',
    psalm: '"Các bạn hãy nếm thử và hãy nhìn coi, cho biết Chúa thiện hảo nhường bao."',
    second: 'Thánh Phao-lô nói về hôn nhân dưới ánh sáng tình yêu Đức Kitô: "hãy phục tùng nhau trong sự kính sợ Đức Kitô" (c. 21). Người chồng hãy yêu vợ "như Đức Kitô yêu thương Hội Thánh và phó mình vì Hội Thánh" (c. 25).',
    gospel: 'Sau bài giảng về Bánh hằng sống, nhiều môn đệ nói: "Lời này chói tai quá! Ai nghe được!" và bỏ đi. Chúa hỏi Nhóm Mười Hai: "Cả các con, các con có muốn bỏ đi không?" Phê-rô thưa: "Lạy Thầy, chúng con sẽ đi theo ai? Thầy mới có những lời ban sự sống đời đời."',
    connect: 'Giô-suê và Phê-rô cùng đứng trước một lựa chọn: theo ai? Và cả hai đều chọn Chúa. Thư Ê-phê-xô cho thấy chọn Chúa cũng là chọn một cách yêu thương trong đời sống gia đình: hiến mình cho nhau như Đức Kitô hiến mình. Kết thúc năm tuần đọc Gio-an chương 6, Hội Thánh hỏi ta: còn bạn, có muốn bỏ đi không?',
    question: 'Có lời nào của Chúa làm tôi thấy "chói tai" và muốn bỏ đi? Gia đình tôi có thể nói như Giô-suê: "chúng tôi sẽ tôn thờ Chúa"?',
    action: 'Cả gia đình cùng đọc một kinh và lặp lại lời Giô-suê: "Phần tôi và gia đình tôi, chúng tôi sẽ tôn thờ Chúa".'
  },

  // ---------------------------------------------------------------- 24/08 – Thánh Ba-tô-lô-mê-ô (mọi năm)
  'S72408': {
    theme: '"Hãy đến mà xem": người không gian dối gặp Chúa.',
    first: 'Thánh Gio-an thấy thành thánh Giê-ru-sa-lem từ trời xuống, chói lọi vinh quang. Tường thành xây trên mười hai nền móng mang tên mười hai Tông đồ.',
    psalm: '"Lạy Chúa, các bạn hữu Chúa nhận biết vinh quang nước Chúa."',
    gospel: 'Na-tha-na-en (thường được đồng nhất với Ba-tô-lô-mê-ô) hoài nghi: "Bởi Nadarét nào có cái chi hay?" Phi-líp-phê đáp: "Hãy đến mà xem" (c. 46). Chúa nói về ông: "Đây thật là người Israel, nơi ông không có gì gian dối" (c. 47), và ông tuyên xưng: "Thầy là Con Thiên Chúa, là Vua Israel" (c. 49).',
    connect: 'Na-tha-na-en thẳng thắn đến mức hoài nghi, nhưng chính sự chân thành ấy dẫn ông đến với Chúa. Sách Khải Huyền cho thấy ông trở thành một trong mười hai nền móng của thành thánh.',
    question: 'Tôi có thẳng thắn, không gian dối với Chúa và với người khác? Tôi có biết mời ai đó: "Hãy đến mà xem"?',
    action: 'Mời một người bạn cùng đi lễ hoặc tham gia một sinh hoạt của giáo xứ.'
  },

  // ---------------------------------------------------------------- 29/08/2027 – CN XXII Thường Niên năm B
  'T5220-B': {
    theme: 'Đạo đức từ trong lòng, không chỉ ngoài môi miệng.',
    first: 'Mô-sê dạy: "Các ngươi chớ thêm bớt điều gì trong các điều ta đã truyền" (c. 2). Lề luật là "sự khôn ngoan và sáng suốt của các ngươi trước mặt muôn dân" (c. 6).',
    psalm: '"Lạy Chúa, ai sẽ được ở trong đền tạm Chúa?" Người sống ngay thẳng, nói sự thật trong lòng.',
    second: '"Anh em hãy thực thi lời đã nghe, chứ đừng nghe suông" (c. 22). Đạo đức tinh tuyền là thăm viếng kẻ mồ côi, góa bụa trong cơn khốn khó và giữ mình khỏi thế gian (c. 27).',
    gospel: 'Người Pha-ri-sêu trách các môn đệ ăn mà không rửa tay. Chúa trích lời I-sai-a: "Dân này kính Ta ngoài môi miệng, nhưng lòng chúng ở xa Ta" (c. 6). Điều làm con người ô uế không phải từ bên ngoài vào, mà "từ bên trong, từ tâm trí người ta" (c. 21).',
    connect: 'Đệ nhị luật đề cao Lề luật; Tin Mừng không bỏ Lề luật nhưng đưa nó về đúng chỗ: tấm lòng. Thư Gia-cô-bê nói rõ hơn: đạo đức thật là thực hành, nhất là với người yếu thế. Từ Chúa Nhật này, Hội Thánh đọc thư Gia-cô-bê, một lá thư rất thực tế.',
    question: 'Đời sống đạo của tôi có đang dừng lại ở "ngoài môi miệng" và những tập tục bên ngoài?',
    action: 'Thăm một người góa bụa, mồ côi hay neo đơn trong khu xóm.'
  },

  // ---------------------------------------------------------------- 05/09/2027 – CN XXIII Thường Niên năm B
  'T5230-B': {
    theme: 'Effetha, hãy mở ra: Chúa mở tai và miệng ta.',
    first: '"Các ngươi hãy nói với những tâm hồn xao xuyến: Can đảm lên, đừng sợ!" (c. 4). Khi Thiên Chúa đến, "mắt người mù sẽ sáng lên, và tai người điếc sẽ mở ra" (c. 5), và người câm sẽ nói được.',
    psalm: '"Linh hồn tôi ơi, hãy ngợi khen Chúa!"',
    second: '"Anh em đừng thiên vị" (c. 1). Thánh Gia-cô-bê phê phán việc mời người giàu ngồi chỗ danh dự còn bảo người nghèo đứng một bên. Thiên Chúa đã chọn những người nghèo để làm cho họ nên giàu đức tin (c. 5).',
    gospel: 'Chúa đưa người câm điếc ra khỏi đám đông, đặt ngón tay vào tai, bôi nước miếng vào lưỡi, ngước mắt lên trời, thở dài và nói: "Effetha!" nghĩa là "Hãy mở ra!" (c. 34). Mọi người thán phục: "Người làm mọi sự tốt đẹp" (c. 37).',
    connect: 'I-sai-a hứa người điếc sẽ nghe, người câm sẽ nói; Tin Mừng cho thấy lời hứa ấy thành hiện thực. Thư Gia-cô-bê nhắc ta: người được mở tai phải nghe được tiếng của người nghèo. Lời "Effetha" cũng được đọc trong nghi thức Rửa Tội.',
    question: 'Tai tôi đang "điếc" trước tiếng nói của ai: Chúa, người nghèo, người thân trong nhà?',
    action: 'Đối xử với một người nghèo hoặc người bị xem thường với sự tôn trọng như với người quyền thế.'
  },

  // ---------------------------------------------------------------- 08/09 – Sinh nhật Đức Maria (mọi năm)
  'S70809': {
    theme: 'Bình minh của ơn cứu độ: Thiên Chúa chuẩn bị qua từng thế hệ.',
    first: '"Hỡi Bêlem Ephrata, ngươi nhỏ nhất trong trăm ngàn phần đất Giuđa, nhưng nơi ngươi sẽ xuất hiện một Đấng thống trị Israel" (c. 2), cho đến khi "một người nữ phải sinh, sẽ sinh con" (c. 3).',
    psalm: '"Con sẽ hớn hở vui mừng trong Chúa."',
    gospel: 'Gia phả Chúa Giê-su đi qua bao thế hệ, có người thánh thiện lẫn tội lỗi, để dẫn đến "Giuse, chồng Bà", và đến Đức Maria. Tất cả để ứng nghiệm lời: "Này đây một trinh nữ sẽ thụ thai, sinh hạ một con trai".',
    connect: 'Mi-kha nói về Bê-lem bé nhỏ và người nữ sẽ sinh con; Tin Mừng cho thấy Thiên Chúa kiên nhẫn chuẩn bị qua cả một gia phả. Ngày sinh của Đức Maria như bình minh báo trước Mặt Trời là Chúa Giê-su. Hội Thánh chỉ mừng sinh nhật của ba vị: Chúa Giê-su, Đức Maria và Thánh Gioan Tẩy Giả.',
    question: 'Tôi có tin Thiên Chúa vẫn âm thầm chuẩn bị điều tốt đẹp qua những năm tháng bình thường của đời mình?',
    action: 'Mừng sinh nhật Mẹ bằng một chuỗi Mân Côi; làm một điều tốt cho mẹ của mình.'
  },

  // ---------------------------------------------------------------- 12/09/2027 – CN XXIV Thường Niên năm B
  'T5240-B': {
    theme: '"Còn các con, các con bảo Thầy là ai?": tuyên xưng và vác thập giá.',
    first: 'Người Tôi Trung không cưỡng lại, đưa lưng cho kẻ đánh, vì biết "Chúa nâng đỡ tôi, nên tôi không hổ thẹn" (c. 7). "Đấng xét tôi vô tội ở gần tôi" (c. 8).',
    psalm: '"Tôi sẽ tiến đi trước thiên nhan Chúa trong miền đất của nhân sinh."',
    second: '"Nếu ai nói mình có đức tin, mà không hành động theo đức tin, thì nào có ích gì?" (c. 14). Đức tin "nếu không có việc làm, là đức tin chết tận gốc rễ" (c. 17).',
    gospel: 'Phê-rô tuyên xưng: "Thầy là Đấng Kitô" (c. 29). Nhưng khi Chúa nói về đau khổ, ông can ngăn và bị quở: "Satan, hãy lui đi! vì ngươi không biết việc Thiên Chúa, mà chỉ biết việc loài người" (c. 33). "Ai muốn theo Ta, hãy từ bỏ mình, vác thập giá mình mà theo Ta" (c. 34).',
    connect: 'I-sai-a vẽ chân dung Người Tôi Trung chịu đau khổ; Tin Mừng cho thấy Phê-rô tuyên xưng đúng nhưng chưa chấp nhận con đường ấy. Thư Gia-cô-bê nói: tuyên xưng đức tin phải đi đôi với việc làm. Biết đúng về Chúa chưa đủ; phải theo Người trên con đường thập giá.',
    question: 'Tôi có giống Phê-rô: tuyên xưng Chúa nhưng muốn né tránh thập giá?',
    action: 'Làm một việc cụ thể cho người đang thiếu "cơm ăn áo mặc", thay vì chỉ chúc họ bình an.'
  },

  // ---------------------------------------------------------------- 14/09 – Suy tôn Thánh Giá (mọi năm)
  'S71409': {
    theme: 'Nhìn lên Thánh Giá thì được sống.',
    first: 'Dân kêu trách trong sa mạc và bị rắn lửa cắn. Khi họ nhận tội, Thiên Chúa bảo Mô-sê làm con rắn đồng treo lên: ai bị cắn mà nhìn lên thì được sống.',
    psalm: '"Chúng ta đừng quên lãng những kỳ công của Chúa."',
    second: 'Chúa Giê-su "huỷ bỏ chính mình", "vâng lời cho đến chết, và chết trên thập giá. Vì thế, Thiên Chúa đã tôn vinh Người" (c. 7-9).',
    gospel: '"Cũng như Môsê treo con rắn nơi hoang địa thế nào, thì Con Người cũng phải bị treo lên như vậy" (c. 14). "Thiên Chúa đã yêu thế gian đến nỗi đã ban Con Một Người" (c. 16).',
    connect: 'Con rắn đồng trong sa mạc là hình bóng báo trước Thánh Giá: điều tượng trưng cho cái chết trở thành nguồn sống. Thư Phi-líp-phê cho thấy Thánh Giá là con đường hạ mình dẫn đến vinh quang. Ta suy tôn Thánh Giá không phải vì yêu đau khổ, mà vì nơi đó tình yêu Thiên Chúa tỏ ra trọn vẹn nhất.',
    question: 'Khi bị tội lỗi hay đau khổ "cắn", tôi có biết ngước nhìn lên Thánh Giá?',
    action: 'Đặt hoặc làm sạch thánh giá trong nhà; làm dấu Thánh Giá cách cung kính.'
  }
});

Object.assign(window.MEDITATIONS, {

  // ---------------------------------------------------------------- 19/09/2027 – CN XXV Thường Niên năm B
  'T5250-B': {
    theme: 'Ai muốn làm lớn thì hãy làm đầy tớ, và đón nhận những người bé nhỏ.',
    first: 'Kẻ gian ác bàn nhau vây bắt người công chính vì người ấy là lời khiển trách sống động đối với họ: "Vì nếu nó thật là con Thiên Chúa, Chúa sẽ bênh vực nó" (c. 18). Lời này như mô tả trước những kẻ chế nhạo Chúa Giê-su trên thập giá.',
    psalm: '"Chúa đang nâng đỡ tâm hồn con."',
    second: '"Ở đâu có ganh tị và cãi vã, ở đó có hỗn độn và đủ thứ tệ đoan" (3, 16). Còn sự khôn ngoan từ trời thì "trong trắng, rồi ôn hoà, bao dung, nhu mì" (3, 17).',
    gospel: 'Chúa Giê-su báo trước cuộc khổ nạn, nhưng các môn đệ "không hiểu lời đó và sợ không dám hỏi Người". Dọc đường, họ tranh luận xem ai lớn nhất. Chúa dạy: "Ai muốn làm lớn nhất, thì hãy tự làm người rốt hết và làm đầy tớ mọi người", rồi ôm một em bé và nói: ai đón nhận một trẻ nhỏ như thế vì danh Thầy là đón tiếp chính Thầy.',
    connect: 'Sách Khôn ngoan cho thấy người công chính bị bách hại vì sống khác; Tin Mừng cho thấy Chúa Giê-su là Người Công Chính ấy, trong khi môn đệ còn mải tranh giành địa vị. Thư Gia-cô-bê chỉ ra gốc rễ: ganh tị và đam mê trong lòng. Trẻ nhỏ thời đó không có địa vị gì, nên đón nhận các em là đón nhận người bé mọn nhất.',
    question: 'Tôi có đang tranh luận dọc đường xem ai hơn ai, trong gia đình, nơi làm việc hay ngay trong giáo xứ?',
    action: 'Dành thời gian quan tâm một em nhỏ hoặc một người bị xem là không quan trọng.'
  },

  // ---------------------------------------------------------------- 21/09 – Thánh Mát-thêu (mọi năm)
  'S72109': {
    theme: '"Hãy theo Ta": Chúa gọi cả người thu thuế.',
    first: 'Thánh Phao-lô khuyên anh em sống xứng với ơn kêu gọi. Chúa ban cho mỗi người một ơn riêng: người làm tông đồ, người làm ngôn sứ, người rao giảng Tin Mừng, người chăn dắt và dạy dỗ, để xây dựng thân thể Đức Kitô.',
    psalm: '"Tiếng chúng đã vang cùng trái đất."',
    gospel: 'Chúa thấy Mát-thêu ngồi ở bàn thu thuế và nói: "Hãy theo Ta" (c. 9). Ông đứng dậy đi theo ngay. Khi bị chê trách vì ăn với người tội lỗi, Chúa đáp: "Người lành mạnh không cần đến thầy thuốc, nhưng là người đau yếu!" (c. 12), và "Ta muốn lòng nhân từ, chớ không phải hy lễ" (c. 13).',
    connect: 'Người thu thuế bị xem là tội lỗi trở thành Tông đồ và tác giả sách Tin Mừng. Thư Ê-phê-xô cho thấy mỗi ơn gọi đều nhằm xây dựng Hội Thánh. Không ai quá tội lỗi để Chúa không thể gọi.',
    question: 'Có ai tôi đã xếp loại là không thể thay đổi, trong khi Chúa vẫn đang gọi họ?',
    action: 'Đối xử thân thiện với một người bị người khác xa lánh.'
  },

  // ---------------------------------------------------------------- 26/09/2027 – CN XXVI Thường Niên năm B
  'T5260-B': {
    theme: 'Thánh Thần thổi đâu tùy ý: đừng ngăn cấm điều thiện.',
    first: 'Thần Khí ngự xuống cả trên hai người không có mặt trong lều hội ngộ, và họ nói tiên tri. Giô-suê muốn ngăn, nhưng Mô-sê đáp: ước gì toàn dân Chúa đều là ngôn sứ và được Chúa ban Thần Khí.',
    psalm: '"Giới răn Chúa chính trực, làm hoan lạc tâm can."',
    second: 'Thánh Gia-cô-bê cảnh cáo người giàu bất công: "tiền công thợ gặt ruộng cho các ngươi mà các ngươi đã gian lận" đang kêu oan lên đến tai Chúa.',
    gospel: 'Gio-an muốn ngăn một người không thuộc nhóm mà nhân danh Thầy trừ quỷ. Chúa đáp: "Ai chẳng chống đối các con, là ủng hộ các con." Ngay cả một ly nước trao vì danh Đức Kitô cũng không mất phần thưởng. Nhưng gây vấp phạm cho người bé mọn là điều rất nghiêm trọng.',
    connect: 'Giô-suê và Gio-an cùng muốn độc quyền điều thiện; Mô-sê và Chúa Giê-su cùng mở rộng lòng. Thánh Thần không bị giới hạn trong nhóm của chúng ta. Thư Gia-cô-bê và phần cuối Tin Mừng nhắc mặt kia: điều làm Chúa buồn là bất công và làm hại người bé nhỏ, chứ không phải người khác làm việc tốt.',
    question: 'Tôi có ganh tị hay khó chịu khi thấy người không cùng nhóm làm điều tốt?',
    action: 'Khen ngợi hoặc cộng tác với một việc tốt do người khác (khác giáo xứ, khác tôn giáo) khởi xướng.'
  },

  // ---------------------------------------------------------------- 29/09 – Các Tổng Lãnh Thiên Thần (mọi năm)
  'S72909': {
    theme: 'Các thiên thần phụng sự Thiên Chúa và đồng hành với con người.',
    first: 'Đa-ni-en thấy vị Bô Lão ngự trên tòa, "có hằng ngàn kẻ phụng sự Người và muôn muôn vàn kẻ chầu chực Người" (c. 10), và Con Người đến trên mây trời.',
    psalm: '"Lạy Chúa, trước mặt các thiên thần, con đàn ca mừng Chúa."',
    gospel: 'Chúa nói với Na-tha-na-en: "các ngươi sẽ thấy trời mở ra, và các thiên thần Chúa lên xuống trên Con Người" (c. 51).',
    connect: 'Micae (nghĩa là Ai bằng Thiên Chúa?) chiến đấu chống sự dữ; Gabriel (Sức mạnh của Thiên Chúa) báo tin vui; Raphael (Thiên Chúa chữa lành) đồng hành và chữa lành. Đa-ni-en cho thấy các thiên thần phụng sự trước ngai Thiên Chúa; Tin Mừng cho thấy nhờ Chúa Giê-su, trời và đất được nối lại.',
    question: 'Tôi đang cần ơn nào nhất: sức mạnh chống sự dữ, can đảm đón nhận tin Chúa, hay được chữa lành?',
    action: 'Đọc kinh cầu Thánh Micae; cảm tạ Chúa vì Thiên Thần Bản Mệnh.'
  },

  // ---------------------------------------------------------------- 01/10 – Thánh Tê-rê-xa Hài Đồng (lễ kính tại VN, mọi năm)
  'S70110': {
    theme: 'Con đường thơ ấu thiêng liêng: trở nên như trẻ nhỏ trong tay Chúa.',
    first: 'Thiên Chúa an ủi dân Người như người mẹ: "Ta sẽ làm cho sự bình an chảy đến nó như con sông" (c. 12), và như mẹ bồng con trên tay, nâng niu trên đầu gối.',
    psalm: '"Lạy Chúa, xin giữ linh hồn con trong bình an của Chúa."',
    gospel: 'Các môn đệ hỏi ai lớn nhất trong Nước Trời. Chúa đặt một em nhỏ giữa họ: "nếu các con không hoá nên như trẻ nhỏ, các con sẽ không được vào Nước Trời" (c. 3).',
    connect: 'I-sai-a cho thấy Thiên Chúa yêu thương như người mẹ; Tin Mừng mời ta đáp lại bằng lòng tín thác như trẻ nhỏ. Thánh Tê-rê-xa sống điều đó trong con đường thơ ấu: làm việc nhỏ với tình yêu lớn. Ngài là bổn mạng các xứ truyền giáo, dù chưa bao giờ rời tu viện.',
    question: 'Tôi có biết sống những việc nhỏ hằng ngày với tình yêu lớn như Thánh Tê-rê-xa?',
    action: 'Làm một việc nhỏ âm thầm vì yêu Chúa và cầu nguyện cho các nhà truyền giáo.'
  },

  // ---------------------------------------------------------------- 03/10/2027 – CN XXVII Thường Niên năm B
  'T5270-B': {
    theme: 'Điều Thiên Chúa đã kết hợp: hôn nhân trong chương trình của Đấng Tạo Hóa.',
    first: '"Đàn ông ở một mình không tốt" (c. 18). Thiên Chúa dựng nên người nữ, và A-đam nhận ra người bạn "giống như mình". Vì thế, người nam sẽ gắn bó với vợ và hai người nên một xương một thịt.',
    psalm: '"Nguyện Chúa chúc phúc cho chúng con hết mọi ngày trong đời sống chúng con!"',
    second: 'Chúa Giê-su đã "trong một thời gian bị hạ xuống kém các Thiên Thần" và chịu chết thay cho mọi người (c. 9). Người không hổ thẹn gọi ta là anh em (c. 11).',
    gospel: 'Người Pha-ri-sêu hỏi về ly dị. Chúa đưa họ về "lúc khởi đầu cuộc sáng tạo": "họ không còn là hai mà là một huyết nhục. Vậy sự gì Thiên Chúa đã kết hợp, loài người không được phân rẽ" (c. 8-9). Rồi Người ôm các trẻ nhỏ và chúc lành cho chúng.',
    connect: 'Sách Sáng thế và Tin Mừng cùng nói về hôn nhân theo ý định ban đầu của Thiên Chúa: không phải một hợp đồng có thể hủy, mà là sự hiệp nhất. Cảnh Chúa ôm các trẻ nhỏ nhắc rằng gia đình là nơi đón nhận sự sống. Thư Do-thái cho thấy Chúa Giê-su gọi ta là anh em, cùng một gia đình.',
    question: 'Tôi đang góp phần xây dựng hay làm tổn thương sự hiệp nhất trong gia đình mình?',
    action: 'Cầu nguyện cho các đôi vợ chồng đang gặp khó khăn; vợ chồng (hoặc cả nhà) dành một buổi tối trò chuyện với nhau.'
  },

  // ---------------------------------------------------------------- Chúa Nhật đầu tháng 10 – kính trọng thể Đức Mẹ Mân Côi
  'S70710': {
    theme: 'Cùng Mẹ Maria cầu nguyện và suy niệm các mầu nhiệm của Chúa.',
    first: 'Sau khi Chúa lên trời, các Tông đồ trở về Giê-ru-sa-lem và "đồng tâm nhất trí, chuyên cần cầu nguyện" cùng với Đức Maria, Mẹ Chúa Giê-su (c. 14).',
    psalm: '"Đấng Toàn Năng đã làm cho tôi biết bao điều cao cả, danh Người thật chí thánh chí tôn!"',
    gospel: 'Sứ thần Gáp-ri-en chào: "Kính chào Trinh Nữ đầy ơn phước, Thiên Chúa ở cùng Trinh Nữ" (c. 28). Lời chào ấy trở thành phần đầu kinh Kính Mừng.',
    connect: 'Tin Mừng cho ta lời kinh Kính Mừng; sách Công vụ cho ta hình ảnh Hội Thánh cầu nguyện cùng Mẹ. Chuỗi Mân Côi là cách đơn sơ để cùng Mẹ suy niệm cuộc đời Chúa Giê-su: vui, sáng, thương, mừng. Tháng 10 là tháng Mân Côi.',
    question: 'Khi lần chuỗi, tôi có thật sự suy niệm các mầu nhiệm, hay chỉ đọc cho xong?',
    action: 'Lần chuỗi Mân Côi mỗi ngày trong tháng 10, mỗi chục dừng lại một chút nghĩ về mầu nhiệm.'
  },

  // ---------------------------------------------------------------- 10/10/2027 – CN XXVIII Thường Niên năm B
  'T5280-B': {
    theme: '"Ngươi chỉ thiếu một điều": tự do để theo Chúa.',
    first: 'Vua Sa-lô-môn cầu xin sự khôn ngoan hơn là vương quốc và ngai vàng: "Ðem so sánh sự giàu sang với sự khôn ngoan, tôi kể sự giàu sang như không" (c. 8).',
    psalm: '"Xin cho chúng con sớm được no phỉ ân tình của Chúa, để chúng con mừng rỡ hân hoan."',
    second: '"Lời Thiên Chúa là lời hằng sống, linh nghiệm, sắc bén hơn mọi thứ gươm hai lưỡi" (c. 12), thấu suốt tâm can ta.',
    gospel: 'Một người chạy đến hỏi phải làm gì để được sống đời đời. Chúa "chăm chú nhìn người ấy và đem lòng thương" (c. 21), rồi nói: "Ngươi chỉ thiếu một điều", hãy bán hết, bố thí, "rồi đến theo Ta". Anh ta "buồn rầu bỏ đi, vì anh ta có nhiều của cải" (c. 22). Chúa nói: "Đối với loài người thì không thể được, nhưng không phải đối với Thiên Chúa" (c. 27).',
    connect: 'Sa-lô-môn chọn khôn ngoan hơn của cải; người thanh niên giàu có chọn của cải hơn Chúa. Thư Do-thái nói Lời Chúa như gươm sắc thấu suốt lòng người: chính Lời ấy đã chạm đến "một điều" anh ta còn thiếu. Chúa nhìn anh với lòng thương, và điều không thể với người thì có thể với Thiên Chúa.',
    question: '"Một điều" tôi còn thiếu, hay còn bám víu, khiến tôi chưa theo Chúa trọn vẹn là gì?',
    action: 'Cho đi một món đồ mình quý nhưng không thật cần; xin Chúa ơn tự do nội tâm.'
  },

  // ---------------------------------------------------------------- 17/10/2027 – CN XXIX Thường Niên năm B
  'T5290-B': {
    theme: 'Con Người đến để phục vụ và hiến mạng sống làm giá chuộc.',
    first: 'Người Tôi Trung hiến thân làm lễ đền tội, và "nhờ sự thông biết, tôi tớ công chính của Ta sẽ công chính hoá nhiều người, sẽ gánh lấy những tội ác của họ" (c. 11).',
    psalm: '"Lạy Chúa, xin đổ lòng từ bi xuống trên chúng con, theo như chúng con tin cậy ở nơi Ngài."',
    second: 'Ta có một Thượng tế "đã từng chịu thử thách bằng mọi cách như chúng ta, ngoại trừ tội lỗi" (c. 15). Vậy hãy cậy trông tiến đến tòa ân sủng.',
    gospel: 'Gia-cô-bê và Gio-an xin chỗ ngồi bên hữu bên tả. Chúa hỏi: "Các con có thể uống chén Thầy sắp uống" không? (c. 38). Rồi Người dạy: "ai trong các con muốn làm lớn, thì hãy tự làm đầy tớ anh em" (c. 43), vì "Con Người cũng không đến để được phục vụ, nhưng để phục vụ và ban mạng sống mình làm giá cứu chuộc cho nhiều người" (c. 45).',
    connect: 'I-sai-a mô tả Người Tôi Trung gánh tội nhiều người; Tin Mừng cho thấy Chúa Giê-su nhận mình là Người Tôi Trung ấy. Thư Do-thái thêm rằng Người cảm thông với yếu đuối của ta. Uy quyền trong Hội Thánh là phục vụ.',
    question: 'Trong vai trò của mình (cha mẹ, người lãnh đạo, người phục vụ giáo xứ), tôi đang "phục vụ" hay "sai khiến"?',
    action: 'Làm một việc phục vụ cho người dưới quyền hoặc người nhỏ tuổi hơn mình.'
  },

  // ---------------------------------------------------------------- 18/10 – Thánh Lu-ca (mọi năm)
  'S71810': {
    theme: 'Thánh Lu-ca, người bạn trung thành và tác giả Tin Mừng của lòng thương xót.',
    first: 'Trong lúc bị bỏ rơi, Thánh Phao-lô viết: "Chỉ còn một mình Luca ở với cha" (c. 11). Lu-ca là người cộng tác trung thành đến cùng.',
    psalm: '"Lạy Chúa, con cái Chúa làm cho loài người nhận biết vinh quang cao cả nước Chúa."',
    gospel: 'Chúa sai bảy mươi hai môn đệ đi từng hai người: "Lúa chín đầy đồng mà thợ gặt thì ít" (c. 2). Vào nhà nào, hãy nói trước hết: "Bình an cho nhà này" (c. 5).',
    connect: 'Lu-ca không thuộc Nhóm Mười Hai, nhưng đã ghi lại Tin Mừng và sách Công vụ, đặc biệt những dụ ngôn về lòng thương xót như người cha nhân hậu, người Sa-ma-ri tốt lành. Ông là người ở lại bên Phao-lô khi người khác bỏ đi.',
    question: 'Tôi có là người bạn trung thành "ở lại" bên ai đó khi họ bị bỏ rơi?',
    action: 'Đọc một chương Tin Mừng theo Thánh Lu-ca, chẳng hạn chương 15 về lòng thương xót.'
  },

  // ---------------------------------------------------------------- 24/10/2027 – CN XXX Thường Niên năm B (Khánh nhật Truyền giáo)
  'T5300-B': {
    theme: '"Lạy Thầy, xin cho tôi được thấy": từ ven đường đến theo Chúa.',
    first: 'Thiên Chúa sẽ quy tụ dân Người từ khắp nơi, cả "kẻ đui mù, què quặt" (c. 8), dẫn họ về bên suối nước như người cha dẫn con.',
    psalm: '"Chúa đã đối xử đại lượng với chúng tôi, nên chúng tôi mừng rỡ hân hoan."',
    second: 'Mỗi thượng tế "có thể thông cảm với những kẻ mê muội và lầm lạc, vì chính người cũng mắc phải yếu đuối" (c. 2). Đức Kitô không tự tôn vinh mình, mà được Thiên Chúa gọi.',
    gospel: 'Ba-ti-mê ngồi ăn xin bên vệ đường, kêu lên: "Hỡi ông Giêsu con vua Ðavít, xin thương xót tôi" (c. 47). Bị mắng, anh càng kêu to. Chúa dừng lại và hỏi: "Anh muốn Ta làm gì cho anh?" (c. 51). "Lạy Thầy, xin cho tôi được thấy." Anh liệng áo choàng, được sáng mắt và "đi theo Người" (c. 52).',
    connect: 'Giê-rê-mi-a hứa Thiên Chúa sẽ quy tụ cả người mù; Tin Mừng cho thấy Chúa Giê-su dừng lại vì một người mù bên đường. Ba-ti-mê không chỉ được sáng mắt mà còn trở thành môn đệ. Khánh nhật Truyền giáo nhắc ta: được Chúa chữa lành thì cũng được sai đi.',
    question: 'Chiếc áo choàng nào tôi cần liệng đi để đứng dậy theo Chúa? Tôi muốn Chúa làm gì cho mình?',
    action: 'Cầu nguyện và đóng góp cho công cuộc truyền giáo trong ngày Khánh nhật Truyền giáo.'
  },

  // ---------------------------------------------------------------- 28/10 – Thánh Si-môn và Giu-đa (mọi năm)
  'S72810': {
    theme: 'Được chọn sau một đêm cầu nguyện: hai vị Tông đồ âm thầm.',
    first: 'Anh em "không còn là khách trọ và là khách qua đường nữa", nhưng là người nhà của Thiên Chúa, được xây trên nền các Tông đồ, có Đức Kitô làm Đá góc.',
    psalm: '"Tiếng chúng đã vang cùng trái đất."',
    gospel: 'Trước khi chọn Mười Hai Tông đồ, "suốt đêm Người cầu nguyện cùng Thiên Chúa" (c. 12). Trong danh sách có "Simon cũng gọi là nhiệt thành" và "Giuđa con ông Giacôbê" (c. 15-16).',
    connect: 'Kinh Thánh nói rất ít về Si-môn và Giu-đa Tađêô, nhưng các ngài là một phần của nền móng Hội Thánh. Chúa chọn các ngài sau một đêm cầu nguyện, cho thấy mọi ơn gọi bắt nguồn từ lời cầu nguyện của Chúa với Chúa Cha.',
    question: 'Tôi có cầu nguyện trước những quyết định quan trọng như Chúa Giê-su đã làm?',
    action: 'Cầu nguyện cho ơn gọi trong giáo xứ; xin Thánh Giu-đa Tađêô chuyển cầu cho một việc khó khăn.'
  },

  // ---------------------------------------------------------------- 31/10/2027 – CN XXXI Thường Niên năm B
  'T5310-B': {
    theme: 'Mến Chúa hết lòng và yêu người như chính mình.',
    first: 'Mô-sê truyền: "Hỡi Israel, hãy nghe đây" (c. 4). Thiên Chúa là Chúa duy nhất, hãy yêu mến Người hết lòng, hết linh hồn, hết sức lực. Lời này được người Do-thái đọc mỗi ngày.',
    psalm: '"Lạy Chúa là dũng lực con, con yêu mến Chúa."',
    second: 'Đức Kitô "tồn tại đời đời, nên Người có một chức tư tế hằng hữu" (c. 24), "Người hằng sống để chuyển cầu cho chúng ta" (c. 25).',
    gospel: 'Một luật sĩ hỏi giới răn nào trọng nhất. Chúa đáp bằng hai giới răn: mến Chúa "hết lòng, hết linh hồn, hết trí khôn và hết sức" và "Ngươi hãy yêu mến tha nhân như chính mình ngươi" (c. 30-31). Thấy ông hiểu, Chúa nói: "Ông không còn xa Nước Thiên Chúa bao nhiêu" (c. 34).',
    connect: 'Sách Đệ nhị luật cho lời kinh "Hãy nghe"; Chúa Giê-su nối liền lời ấy với giới răn yêu người. Hai giới răn không tách rời: mến Chúa mà không yêu người là giả dối, yêu người mà không có Chúa thì dễ cạn kiệt.',
    question: 'Tôi "không còn xa Nước Thiên Chúa" hay đã thật sự bước vào, bằng việc sống hai giới răn này mỗi ngày?',
    action: 'Mỗi sáng trong tuần, đọc chậm lời "Hỡi Israel, hãy nghe" và xin ơn yêu mến một người cụ thể trong ngày.'
  },

  // ---------------------------------------------------------------- 01/11 – Các Thánh Nam Nữ (mọi năm)
  'S70111': {
    theme: 'Đoàn người không thể đếm được: ơn gọi nên thánh của mọi người.',
    first: 'Thánh Gio-an thấy "đoàn người đông đảo không thể đếm được, họ thuộc đủ mọi nước" (c. 9), mặc áo trắng, tay cầm nhành lá, đứng trước ngai Con Chiên. Họ là những người đã giặt áo mình trong máu Con Chiên.',
    psalm: '"Lạy Chúa, này là dòng dõi của những kẻ tìm Chúa."',
    second: '"Chúng ta được gọi là con Thiên Chúa và thực sự là thế" (c. 1). Điều ta sẽ trở thành vẫn chưa tỏ ra, nhưng ta sẽ giống như Người (c. 2).',
    gospel: '"Phúc cho những ai có tinh thần nghèo khó, vì Nước Trời là của họ" (c. 3). Các Mối Phúc là chân dung của Chúa Giê-su và con đường nên thánh cho mọi người.',
    connect: 'Khải Huyền cho thấy đích đến: đoàn người các thánh từ mọi dân nước; thư Gio-an cho thấy ta đã là con Thiên Chúa ngay từ bây giờ; Tin Mừng chỉ đường đi: các Mối Phúc. Các thánh không chỉ là những vị trên bàn thờ, mà còn là những người thân đã sống đức tin âm thầm.',
    question: 'Mối Phúc nào tôi cần sống nhiều hơn để nên thánh ngay trong bậc sống của mình?',
    action: 'Tìm hiểu cuộc đời một vị thánh và chọn một nhân đức của ngài để tập sống trong tháng này.'
  },

  // ---------------------------------------------------------------- 02/11 – Cầu cho các tín hữu đã qua đời (mọi năm)
  'S70211': {
    theme: 'Được rửa tội trong cái chết của Đức Kitô, ta hy vọng được sống lại với Người.',
    first: '"Tất cả chúng ta đã chịu phép rửa trong Ðức Giêsu Kitô, tức là đã chịu phép rửa trong sự chết của Người" (c. 3). Nếu đã cùng chết với Người, ta tin cũng sẽ cùng sống với Người (c. 8).',
    psalm: '"Chúa chăn nuôi tôi, tôi chẳng thiếu thốn chi": dù qua thung lũng tối tăm, tôi không sợ hãi.',
    gospel: '"Ta là bánh hằng sống từ trời xuống; ai ăn bánh này, thì sẽ sống đời đời" (c. 51). Ai ăn Thịt và uống Máu Chúa, Người sẽ cho kẻ ấy sống lại ngày sau hết.',
    connect: 'Thư Rô-ma nói phép Rửa đã gắn ta vào cái chết và sự sống lại của Đức Kitô; Tin Mừng nói Thánh Thể là hạt giống sự sống đời đời. Hai bí tích ấy là nền tảng niềm hy vọng khi ta cầu nguyện cho người đã khuất.',
    question: 'Tôi có tin rằng những người thân đã qua đời vẫn hiệp thông với tôi trong Đức Kitô?',
    action: 'Viếng nghĩa trang, cầu nguyện và xin lễ cho ông bà, cha mẹ và các linh hồn không ai nhớ đến.'
  },
  'O80211': {
    theme: '"Ngay hôm nay, ngươi sẽ ở trên thiên đàng với Ta": hy vọng cho mọi người.',
    first: '"Linh hồn những người công chính ở trong tay Chúa" (c. 1). Trước mắt người đời, các ngài như đã bị tiêu diệt, "nhưng thật ra các ngài sống trong bình an" (c. 3).',
    psalm: '"Lạy Chúa, con vươn linh hồn con lên tới Chúa."',
    gospel: 'Trên thập giá, Chúa cầu xin: "Lạy Cha, xin tha cho chúng, vì chúng không biết việc chúng làm" (c. 34). Người trộm thống hối thưa: "Lạy Ngài, khi nào về nước Ngài, xin nhớ đến tôi" (c. 42). Chúa đáp: "ngay hôm nay, ngươi sẽ ở trên thiên đàng với Ta" (c. 43).',
    connect: 'Sách Khôn ngoan nói người công chính ở trong tay Chúa; Tin Mừng cho thấy cả người tội lỗi, chỉ với một lời cầu xin cuối đời, cũng được Chúa đón nhận. Lòng thương xót của Chúa là niềm hy vọng khi ta cầu nguyện cho người đã khuất.',
    question: 'Tôi có dám cầu nguyện cho cả những người đã qua đời mà tôi nghĩ là khó được cứu?',
    action: 'Lặp lại lời người trộm lành cho những người thân đã qua đời: "Lạy Ngài, khi nào về nước Ngài, xin nhớ đến tôi".'
  },

  // ---------------------------------------------------------------- 07/11/2027 – CN XXXII Thường Niên năm B
  'T5320-B': {
    theme: 'Hai bà góa nghèo: cho đi tất cả những gì mình có.',
    first: 'Bà góa ở Xa-rép-ta chỉ còn một nắm bột và chút dầu, định làm bữa cuối rồi chết. Ê-li-a xin bà làm bánh cho ông trước. Bà tin lời Chúa, và bột trong hũ không vơi, dầu trong bình không cạn.',
    psalm: '"Linh hồn tôi ơi, hãy ngợi khen Chúa!" Chúa nâng đỡ cô nhi quả phụ.',
    second: 'Đức Giê-su vào chính thiên đàng để chuyển cầu cho ta, và chỉ "hiến dâng chính mình" một lần (c. 25-26) để xóa tội lỗi.',
    gospel: 'Chúa cảnh giác những luật sĩ thích được chào kính mà "nuốt hết tài sản của các bà goá". Rồi Người nhìn một bà góa nghèo bỏ hai đồng tiền nhỏ: bà "đã bỏ tất cả những gì mình có để nuôi sống mình" (c. 44).',
    connect: 'Bà góa Xa-rép-ta và bà góa trong Đền Thờ đều cho đi tất cả trong cảnh nghèo; thư Do-thái cho thấy Chúa Giê-su cũng đã hiến dâng trọn vẹn chính mình. Chúa không đo bằng số lượng, mà bằng phần còn lại sau khi cho.',
    question: 'Tôi cho Chúa và người khác từ phần dư thừa, hay dám cho cả từ phần "để nuôi sống mình"?',
    action: 'Đóng góp cho người nghèo một khoản mà mình thật sự cảm thấy là hy sinh.'
  },

  // ---------------------------------------------------------------- 09/11 – Cung hiến Thánh đường La-tê-ra-nô (mọi năm)
  'S70911': {
    theme: 'Anh em là đền thờ của Thiên Chúa.',
    first: 'Ê-dê-ki-en thấy dòng nước chảy ra từ Đền Thờ, đi đến đâu làm cho sự sống hồi sinh đến đó, cây cối hai bên bờ sinh trái mỗi tháng.',
    psalm: '"Nước dòng sông làm cho thành Chúa vui mừng, làm hân hoan cung thánh Đấng Tối Cao."',
    second: '"Anh em là toà nhà của Thiên Chúa" (c. 9), xây trên một nền móng duy nhất là Đức Kitô (c. 11). "Anh em không biết anh em là đền thờ của Thiên Chúa" sao? (c. 16).',
    gospel: 'Chúa Giê-su đánh đuổi những người buôn bán khỏi Đền Thờ và nói về đền thờ là chính thân thể Người.',
    connect: 'La-tê-ra-nô là nhà thờ chính tòa của Đức Giáo hoàng, được gọi là mẹ của mọi nhà thờ. Nhưng các bài đọc nhắc rằng đền thờ thật là Đức Kitô và là chính chúng ta: nơi dòng nước sự sống chảy ra cho thế giới.',
    question: 'Đền thờ lòng tôi có đang là nơi sự sống chảy ra cho người khác, hay đã bị biến thành "nơi buôn bán"?',
    action: 'Cầu nguyện cho Đức Giáo hoàng và cho sự hiệp nhất Hội Thánh; góp tay giữ gìn nhà thờ giáo xứ.'
  },

  // ---------------------------------------------------------------- 14/11/2027 – CN XXXIII Thường Niên năm B
  'T5330-B': {
    theme: 'Trời đất sẽ qua đi, nhưng lời Chúa không qua đi.',
    first: 'Đa-ni-en loan báo thời kỳ khốn khổ, nhưng ai có tên trong sách sẽ được cứu. "Những người thông minh sẽ sáng chói như ánh sáng vòm trời" (c. 3), và những ai dạy người khác sống công chính sẽ sáng như sao.',
    psalm: '"Xin bảo toàn con, lạy Chúa, vì con tìm nương tựa Chúa."',
    second: 'Đức Kitô đã dâng "của lễ duy nhất đền tội", rồi "ngự bên hữu Thiên Chúa đến muôn đời" (c. 12).',
    gospel: 'Chúa nói về ngày Con Người đến trong vinh quang. Hãy học bài học cây vả: khi nó đâm chồi, mùa hè đã gần. "Trời đất sẽ qua đi, nhưng lời Thầy nói sẽ chẳng qua đi" (c. 31). Về ngày giờ ấy, "chỉ có mình Cha biết thôi" (c. 32).',
    connect: 'Đa-ni-en và Tin Mừng dùng ngôn ngữ về thời cánh chung, không để gây hoảng sợ, mà để nâng đỡ niềm hy vọng: Thiên Chúa sẽ cứu dân Người. Thư Do-thái cho biết lý do để vững tin: Đức Kitô đã chiến thắng. Ta không cần biết ngày giờ, chỉ cần sống tỉnh thức.',
    question: 'Nếu biết mọi sự sẽ qua đi, tôi muốn điều gì trong đời mình còn lại?',
    action: 'Viết ra một điều mình muốn sửa đổi trước khi năm phụng vụ kết thúc và bắt tay làm ngay.'
  },

  // ---------------------------------------------------------------- 21/11/2027 – Chúa Kitô Vua năm B
  'T5340-B': {
    theme: '"Tôi là Vua": vương quốc của sự thật, không thuộc về thế gian này.',
    first: 'Đa-ni-en thấy "như Con Người đến trong đám mây trên trời", được ban "quyền năng, vinh dự và vương quốc", và "vương quốc của Ngài không khi nào bị phá huỷ" (c. 13-14).',
    psalm: '"Chúa làm vua, Ngài đã mặc thiên oai."',
    second: 'Đức Giê-su Kitô là "chứng tá trung thành, là trưởng tử kẻ chết, là thủ lãnh các vua trần thế" (c. 5), Đấng đã yêu thương ta và rửa ta sạch tội bằng máu Người.',
    gospel: 'Trước Phi-la-tô, Chúa Giê-su nói: "Nước tôi không thuộc về thế gian này" (c. 36). Và: "Tôi là Vua. Tôi sinh ra và đến trong thế gian này là chỉ để làm chứng về Chân lý. Ai thuộc về Chân lý thì nghe tiếng Tôi" (c. 37).',
    connect: 'Đa-ni-en thấy Con Người được trao vương quốc vĩnh cửu; Khải Huyền ca ngợi vị Vua đã yêu thương ta bằng máu mình; Tin Mừng cho thấy vị Vua ấy đứng trước tòa án như một tù nhân. Vương quyền của Chúa không dựa trên sức mạnh, mà trên sự thật và tình yêu. Lễ này khép lại năm phụng vụ năm B.',
    question: 'Trong đời tôi, ai hay điều gì đang thật sự làm "vua"? Tôi có "thuộc về Chân lý" và nghe tiếng Chúa không?',
    action: 'Nhìn lại một năm phụng vụ đã qua, cảm tạ Chúa và chọn một điều muốn dâng cho Chúa trong năm mới bắt đầu từ Mùa Vọng.'
  }
});
