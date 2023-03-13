-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 07, 2023 lúc 07:28 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_restaurant`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `billdetails`
--

CREATE TABLE `billdetails` (
  `bill_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `item_qty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `billdetails`
--

INSERT INTO `billdetails` (`bill_id`, `food_id`, `item_qty`) VALUES
(1, 1, 1),
(2, 16, 2),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 3),
(6, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `billstatus`
--

CREATE TABLE `billstatus` (
  `bill_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bill_phone` varchar(255) DEFAULT NULL,
  `bill_address` text DEFAULT NULL,
  `bill_when` varchar(255) DEFAULT NULL,
  `bill_method` varchar(255) DEFAULT NULL,
  `bill_discount` int(11) DEFAULT NULL,
  `bill_delivery` int(11) DEFAULT NULL,
  `bill_total` int(11) DEFAULT NULL,
  `bill_paid` varchar(255) DEFAULT NULL,
  `bill_status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `billstatus`
--

INSERT INTO `billstatus` (`bill_id`, `user_id`, `bill_phone`, `bill_address`, `bill_when`, `bill_method`, `bill_discount`, `bill_delivery`, `bill_total`, `bill_paid`, `bill_status`) VALUES
(1, 1, '84975695547', 'aaaaa', '2022-12-31T16:08', 'cash', 0, 15, 27, 'true', 6),
(2, 1, '84975695547', 'qeqweqweqw', '2023-01-03T22:13', 'cash', 0, 15, 39, 'true', 6),
(3, 1, '84975695547', 'eqewqe', '2023-01-04T18:34', 'cash', 0, 15, 27, 'false', 0),
(4, 1, '84975695546', 'q', '2023-01-04T18:41', 'cash', 0, 15, 27, 'false', 0),
(5, 1, '84111111111', 'qqqq', '2023-01-04T19:09', 'cash', 0, 15, 27, 'false', 0),
(6, 1, '84111111111', 'Sài Gòn Nè He', '2023-01-05T15:39', 'cash', 3000, 15, 88015, 'true', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booktable`
--

CREATE TABLE `booktable` (
  `book_id` int(11) NOT NULL,
  `book_name` varchar(255) DEFAULT NULL,
  `book_phone` varchar(255) DEFAULT NULL,
  `book_people` int(11) DEFAULT NULL,
  `book_tables` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `book_when` varchar(255) DEFAULT NULL,
  `book_note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `item_qty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `food`
--

CREATE TABLE `food` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_star` varchar(255) DEFAULT NULL,
  `food_vote` varchar(255) DEFAULT NULL,
  `food_price` varchar(255) DEFAULT NULL,
  `food_discount` varchar(255) DEFAULT NULL,
  `food_desc` varchar(255) DEFAULT NULL,
  `food_status` varchar(255) DEFAULT NULL,
  `food_type` varchar(255) DEFAULT NULL,
  `food_category` varchar(255) DEFAULT NULL,
  `food_src` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `food`
--

INSERT INTO `food` (`food_id`, `food_name`, `food_star`, `food_vote`, `food_price`, `food_discount`, `food_desc`, `food_status`, `food_type`, `food_category`, `food_src`) VALUES
(1, 'Bánh Mì Chảo(Hà Nội)', '4.5', '999', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bánh Mì', 'banhmi/banhmi1.png'),
(2, 'Bánh Mì Cay', '4.5', '999', '16000.00', '3000.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Bánh Mì', 'banhmi/banhmi2.png'),
(3, 'Bánh Mì Bột Lọc', '4.5', '500', '17000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bánh Mì', 'banhmi/banhmi3.png'),
(4, 'Bánh Mì Chả Cá', '4.5', '999', '26000.00', '2000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bánh Mì', 'banhmi/banhmi4.png'),
(5, 'Bánh Mì Ép', '4', '500', '20000.00', '0.00', '1 phần mỗi khẩu phần', 'normal', 'Mặn', 'Bánh Mì', 'banhmi/banhmi5.png'),
(6, 'Bánh Mì Gà Xé', '4', '500', '25000.00', '2000.00', '1 phần mỗi khẩu phần', 'new dishes', 'Mặn', 'Bánh Mì', 'banhmi/banhmi6.png'),
(7, 'Bánh Mì Đầu Nhọn', '4.5', '500', '15000.00', '3000.00', '1 phần mỗi khẩu phần', 'seasonal dishes online only', 'Mặn', 'Bánh Mì', 'banhmi/banhmi7.png'),
(8, 'Bánh Mì Xíu Mại', '4.5', '100', '15000.00', '3000.00', '1 phần mỗi khẩu phần', 'new dishes', 'Mặn', 'Bánh Mì', 'banhmi/banhmi8.png'),
(9, 'Bún Riêu Cua', '4.5', '600', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes', 'Mặn', 'Bún', 'bun/bun1.png'),
(10, 'Bún Bò Huế', '4.5', '999', '37000.00', '5000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bún', 'bun/bun2.png'),
(11, 'Bún Bò Giò Heo', '4.5', '999', '40000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bún', 'bun/bun3.png'),
(12, 'Bún Mắm', '4.5', '999', '35000.00', '4000.00', '1 phần mỗi khẩu phần', 'new dishes', 'Mặn', 'Bún', 'bun/bun4.png'),
(13, 'Bún Cá', '4.5', '999', '30000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Bún', 'bun/bun5.png'),
(14, 'Bún Ốc', '4', '400', '35000.00', '5000.00', '1 phần mỗi khẩu phần', 'seasonal dishes', 'Mặn', 'Bún', 'bun/bun6.png'),
(15, 'Phở Bò', '4', '699', '37000.00', '5000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho1.png'),
(16, 'Phở Cuốn', '4.5', '999', '32000.00', '0.00', '3 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho2.png'),
(17, 'Phở Gà', '4.5', '999', '45000.00', '5000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho3.png'),
(18, 'Phở Xào', '4.5', '999', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho4.png'),
(19, 'Phở Khô', '4', '999', '27000.00', '5000.00', '1 phần mỗi khẩu phần', 'normal', 'Mặn', 'Phở', 'pho/pho5.png'),
(20, 'Phở Trộn', '4.5', '999', '32000.00', '2000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho6.png'),
(21, 'Phở Chiên Phồng', '4', '699', '25000.00', '3000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho7.png'),
(22, 'Phở Chua', '4.5', '499', '25000.00', '2000.00', '1 phần mỗi khẩu phần', 'seasonal dishes', 'Mặn', 'Phở', 'pho/pho8.png'),
(23, 'Phở Chay', '4.5', '999', '20000.00', '2000.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Phở', 'pho/pho9.png'),
(24, 'Phở Bò Sốt Vang', '4.5', '699', '40000.00', '4000.00', '1 phần mỗi khẩu phần', 'best seller', 'Mặn', 'Phở', 'pho/pho10.png'),
(25, 'Khoai Tây Nướng', '3.5', '699', '15000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes seasonal dishes', 'Chay', 'Món Phụ', 'mp/mp1.png'),
(26, 'Khoai Tây Chiên', '4.5', '999', '9000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Món Phụ', 'mp/mp2.jpg'),
(27, 'Đậu nướng', '4', '200', '6000.00', '0.00', '1 phần mỗi khẩu phần', 'normal', 'Chay', 'Món Phụ', 'mp/mp3.png'),
(28, 'Cải Bắp', '4', '100', '12000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes', 'Chay', 'Món Phụ', 'mp/mp4.png'),
(29, 'Súp Lơ Trắng', '3.5', '299', '20000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes', 'Chay', 'Món Phụ', 'mp/mp5.png'),
(30, 'Chè Vải Hạt Sen', '4.5', '999', '15000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Tráng Miệng', 'tm/tm1.png'),
(31, 'Bánh Chuối Nướng', '4.5', '999', '9000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Tráng Miệng', 'tm/tm2.png'),
(32, 'Bánh Da Lợn', '4.5', '50', '9000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes', 'Chay', 'Tráng Miệng', 'tm/tm3.png'),
(33, 'Sương Sáo', '3', '599', '17000.00', '0.00', '1 phần mỗi khẩu phần', 'seasonal dishes online only', 'Chay', 'Tráng Miệng', 'tm/tm4.png'),
(34, 'Chè Dừa Dầm', '4', '199', '20000.00', '0.00', '1 phần mỗi khẩu phần', 'normal', 'Chay', 'Tráng Miệng', 'tm/tm5.png'),
(35, 'Bánh Chuối Hấp', '4', '299', '12000.00', '0.00', '1 phần mỗi khẩu phần', 'normal', 'Chay', 'Tráng Miệng', 'tm/tm6.png'),
(36, 'Chè 3 Màu', '4.5', '999', '15000.00', '0.00', '1 phần mỗi khẩu phần', 'normal', 'Chay', 'Tráng Miệng', 'tm/tm7.png'),
(37, 'Cà Phê', '4.5', '999', '19000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Thức Uống', 'tu/tu1.png'),
(38, 'Trà Trái Cây', '4.5', '999', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Thức Uống', 'tu/tu2.png'),
(39, 'Nước Ép', '4.5', '599', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'new dishes seasonal dishes', 'Chay', 'Thức Uống', 'tu/tu3.png'),
(40, 'Tiger', '4', '999', '20000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Thức Uống', 'tu/tu4.png'),
(41, 'Heineken', '3.5', '999', '25000.00', '0.00', '1 phần mỗi khẩu phần', 'seasonal dishes best seller', 'Chay', 'Thức Uống', 'tu/tu5.png'),
(42, 'Nước Giải Khát', '4.5', '9999', '10000.00', '0.00', '1 phần mỗi khẩu phần', 'best seller', 'Chay', 'Thức Uống', 'tu/tu6.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_birth` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_password`, `user_birth`, `user_gender`) VALUES
(1, 'phongnehe', 'thienbinhskt@gmail.com', '84975695547', 'phong@123', '2022-12-02', 'male');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `billdetails`
--
ALTER TABLE `billdetails`
  ADD PRIMARY KEY (`bill_id`,`food_id`);

--
-- Chỉ mục cho bảng `billstatus`
--
ALTER TABLE `billstatus`
  ADD PRIMARY KEY (`bill_id`);

--
-- Chỉ mục cho bảng `booktable`
--
ALTER TABLE `booktable`
  ADD PRIMARY KEY (`book_id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`user_id`,`food_id`);

--
-- Chỉ mục cho bảng `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`food_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `booktable`
--
ALTER TABLE `booktable`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `food`
--
ALTER TABLE `food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
