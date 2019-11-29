-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 29, 2019 at 04:14 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yourmoney`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `firstname` text CHARACTER SET utf8 COLLATE utf8_bin,
  `lastname` text CHARACTER SET utf8 COLLATE utf8_bin,
  `career` text CHARACTER SET utf8 COLLATE utf8_bin,
  `monthly_income` int(7) NOT NULL,
  `email` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`username`, `password`, `firstname`, `lastname`, `career`, `monthly_income`, `email`) VALUES
('bandall', 'A7wx3JpVCZ', 'john', 'smith', 'software developer', 75000, 'bandall@gmail.com'),
('blikimore', '3xRYXY3VQE', 'ava', 'singh', 'cartographer', 56200, 'blikimore@gmail.com'),
('breacche', 'crHDj2cAAY', 'sophie', 'murphy', 'it manager', 63300, 'breacche@gmail.com'),
('brighthulk', 'sWEarN9bUn', 'bethany', 'thomas', 'landscaper', 60000, 'brighthulk@gmail.com'),
('editussion', 'nVSRCH7D4T', 'amelia', 'wilson', 'statistican', 63000, 'editussion@gmail.com'),
('flamesbria', '7Nq6MgWqK4', 'megan', 'david', 'lawyer', 88000, 'flamesbria@gmail.com'),
('interestec', '2TQjTAkbja', 'victiria', 'roy', 'construction manager', 40500, 'interestec@gmail.com'),
('linguss', '39maFvuAmq', 'lilly', 'li', 'computer system analysis', 102600, 'linguss@gmail.com'),
('liveltekah', 'uF6szXmL4K', 'olivia', 'williams', 'physician assistant', 80000, 'liveltekah@gmailcom'),
('lovesboost', 'xTqP3Lxa8g', 'lauren', 'tremblay', 'financial advisor', 65000, 'lovesboost@gmail.com'),
('monsterup', 'xu8jsbWPZ3', 'lala', 'brown', 'dentist', 95000, 'monsterup@gmail.com'),
('oporkittipong', '5555', 's', 'ddsd', 'engi', 500, '@thaiail'),
('oranolio', '8e7wEBhmsw', 'margaret', 'walsh', 'marketing manager', 42800, 'oranolio@gmail.com'),
('ortspoon', 'EaC8P3mdb9', 'emily', 'taylor', 'nurse anesthetist', 45200, 'ortspoon@gmailcom'),
('reakefit', 'mbQD9442YP', 'samantha', 'byrne', 'civil engineer', 78550, 'reakefit@gmail.com'),
('reallychel', '9cvTdMvqTY', 'poppy', 'jones', 'orthodontist', 62100, 'reallychel@gmailc.com'),
('spuffyffet', '4LsbzpVzyC', 'elizabeth', 'boberts', 'information security analyst', 95580, 'spuffyffet@gmail.com'),
('sweetieke', 'N7yDsMKqK5', 'joanne', 'brown', 'mechanical engineer', 70000, 'sweetieke@gmail.com'),
('wattlexp', 'nzNrY96nKf', 'jessica', 'anderson', 'financial manager', 66390, 'wattlexp@gmail.com');

--
-- Triggers `account`
--
DELIMITER $$
CREATE TRIGGER `account_delete` BEFORE DELETE ON `account` FOR EACH ROW INSERT INTO activity_log
VALUES (old.username,null,'Deleted',null)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `account_insert` AFTER INSERT ON `account` FOR EACH ROW INSERT INTO activity_log 
VALUES (new.username,null,'Inserted',null)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `account_update` AFTER UPDATE ON `account` FOR EACH ROW INSERT INTO activity_log
VALUES (new.username,null,'Updated',null)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `account_bank`
--

CREATE TABLE `account_bank` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bank_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account_bank`
--

INSERT INTO `account_bank` (`username`, `bank_id`) VALUES
('linguss', 60004),
('liveltekah', 60005),
('reakefit', 60003),
('wattlexp', 60006),
('wattlexp', 60007),
('wattlexp', 60008);

-- --------------------------------------------------------

--
-- Table structure for table `account_credit`
--

CREATE TABLE `account_credit` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `credit_id` int(6) NOT NULL,
  `time_period` int(11) NOT NULL,
  `total_payment` int(8) NOT NULL,
  `monthly_payment` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account_credit`
--

INSERT INTO `account_credit` (`username`, `credit_id`, `time_period`, `total_payment`, `monthly_payment`) VALUES
('bandall', 40004, 20, 1000000, 5000),
('brighthulk', 40003, 40, 70000, 9000),
('editussion', 40000, 50, 1000000, 4000),
('editussion', 40004, 40, 700000, 4000),
('editussion', 40006, 30, 1000000, 6000),
('linguss', 40008, 60, 1000000, 6000),
('liveltekah', 40008, 10, 800000, 7000),
('oranolio', 40000, 40, 500000, 4000),
('ortspoon', 40005, 50, 1000000, 2000),
('reakefit', 40002, 50, 10000, 8000),
('reallychel', 40000, 25, 900000, 4000),
('spuffyffet', 40001, 20, 100000, 2000);

-- --------------------------------------------------------

--
-- Table structure for table `account_investment`
--

CREATE TABLE `account_investment` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `investment_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account_investment`
--

INSERT INTO `account_investment` (`username`, `investment_id`) VALUES
('bandall', 50000),
('brighthulk', 50001),
('brighthulk', 50013),
('flamesbria', 50014),
('interestec', 50004),
('interestec', 50007),
('interestec', 50010),
('interestec', 50014),
('lovesboost', 50012),
('spuffyffet', 50012),
('wattlexp', 50012);

-- --------------------------------------------------------

--
-- Table structure for table `account_monthly_fee`
--

CREATE TABLE `account_monthly_fee` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `fee_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account_monthly_fee`
--

INSERT INTO `account_monthly_fee` (`username`, `fee_id`) VALUES
('blikimore', 20020),
('breacche', 20016),
('brighthulk', 20023),
('flamesbria', 20018),
('interestec', 20021),
('linguss', 20018),
('liveltekah', 20015),
('monsterup', 20016),
('oranolio', 20020),
('ortspoon', 20021),
('spuffyffet', 20019);

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE `activity_log` (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `time_log` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `activity_action` text CHARACTER SET utf8 COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `bank_id` int(6) NOT NULL,
  `name_in_bank` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bank_number` int(10) NOT NULL,
  `bank_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`bank_id`, `name_in_bank`, `bank_number`, `bank_name`) VALUES
(60000, 'Aaron Hank', 2147483647, 'Bangkok Bank'),
(60001, 'Abagnale Frank', 2147483647, 'kasikorn Bank'),
(60002, 'abbay Edward', 2147483647, 'Siam Commercial Bank'),
(60003, 'Baker Lester', 2147483647, 'TMB Bank'),
(60004, 'Barlow Jack', 2147483647, 'Bank of Ayudhya'),
(60005, 'Stein Max', 2147483647, 'Thanachart Bank'),
(60006, 'Romano Ray', 2147483647, 'Thanachart Bank'),
(60007, 'Robinson Spider', 1548889682, 'kasikorn Bank'),
(60008, 'Roth Geneen', 1679435845, 'Siam Commercial Bank'),
(60009, 'Postel Jon', 2147483647, 'Siam Commercial Bank'),
(60010, 'Pope Karl', 2147483647, 'Bank of Ayudhya'),
(60011, 'Putin Hari', 1598758745, 'kasikorn Bank'),
(60012, 'Marie Huang', 2147483647, 'kasikorn Bank'),
(60013, 'Palme Louis', 2147483647, 'Bank of Ayudhya'),
(60014, 'Pater Walter', 2147483647, 'Bank of Ayudhya');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(6) NOT NULL,
  `company_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`) VALUES
(30001, 'บริษัทหลักทรัพย์จัดการกองทุน กสิกรไทย จำกัด\r\n'),
(30002, 'บริษัทหลักทรัพย์จัดการกองทุน กรุงศรี จำกัด'),
(30003, 'บริษัทหลักทรัพย์จัดการกองทุน ธนชาต จำกัด'),
(30004, 'บริษัทหลักทรัพย์จัดการกองทุน ทหารไทย จำกัด'),
(30005, 'บริษัทหลักทรัพย์จัดการกองทุน ทิสโก้ จำกัด'),
(30006, 'บริษัทหลักทรัพย์จัดการกองทุน ไทยพาณิชย์ จำกัด'),
(30007, 'ธนาคารกรุงไทย'),
(30008, 'ธนาคารกสิกรไทย'),
(30009, 'ธนาคารกรุงเทพ'),
(30010, 'ธนาคารกรุงศรีอยุธยา'),
(30011, 'ธนาคารไทยพาณิชย์');

-- --------------------------------------------------------

--
-- Table structure for table `credit`
--

CREATE TABLE `credit` (
  `credit_id` int(6) NOT NULL,
  `credit_name` text CHARACTER SET utf8 NOT NULL,
  `credit_interest` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `time_period` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `credit_limit` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `credit_minimum_income` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `credit_type` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `credit`
--

INSERT INTO `credit` (`credit_id`, `credit_name`, `credit_interest`, `time_period`, `credit_limit`, `credit_minimum_income`, `credit_type`) VALUES
(40000, 'สินเชื่ออนกประสงค์ 5 Plus', '17%', ' รวมอายุแล้วไม่เกิน 5 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '15000/เดือน', 'สินเชื่ออเนกประสงค์'),
(40001, 'สินเชื่อกรุงไทยธนวัฏ 5 Plus', '9%', ' รวมอายุแล้วไม่เกิน 10 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '15000/เดือน', 'สินเชื่อส่วนบุคคล'),
(40002, 'สินเชื่อกรุงไทย Smart Money', '15%', ' รวมอายุแล้วไม่เกิน 10 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '15000/เดือน', 'สินเชื่อส่วนบุคคล'),
(40003, 'สินเชื่อบุคคลกสิกรไทย', '17%', ' รวมอายุแล้วไม่เกิน 5 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,500,000 บาท', '15000/เดือน', 'สินเชื่อส่วนบุคคล'),
(40004, 'สินเชื่อ บัวหลวงสุขใจ', '16%', ' รวมอายุแล้วไม่เกิน 15 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '15000/เดือน', 'สินเชื่อส่วนบุคคล'),
(40005, 'สินเชื่อ บัวหลวงอุ่นใจ', '18%', ' รวมอายุแล้วไม่เกิน 10 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '20000/เดือน', 'สินเชื่อส่วนบุคคล'),
(40006, 'สินเชื่อคอนโด กรุงศรี', '15%', ' รวมอายุแล้วไม่เกิน 10 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '20000/เดือน', 'สินเชื่อบ้าน'),
(40007, 'สินเชื่อกรุงศรี คาร์ ฟอร์ แคช', '12%', ' รวมอายุแล้วไม่เกิน 7 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 1,000,000 บาท', '20000/เดือน', 'สินเชื่อรถ'),
(40008, 'สินเชื่อส่วนบุคคล Your Loan', '15%', ' รวมอายุแล้วไม่เกิน 10 ปี', 'สูงสุด 5 เท่าของรายได้ หรือไม่เกิน 2,000,000 บาท', '20000/เดือน', 'สินเชื่อส่วนบุคคล');

-- --------------------------------------------------------

--
-- Table structure for table `credit_company`
--

CREATE TABLE `credit_company` (
  `credit_id` int(6) NOT NULL,
  `company_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `credit_company`
--

INSERT INTO `credit_company` (`credit_id`, `company_id`) VALUES
(40000, 30007),
(40001, 30007),
(40002, 30007),
(40003, 30008),
(40004, 30009),
(40005, 30009),
(40006, 30010),
(40007, 30010),
(40008, 30011);

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

CREATE TABLE `investment` (
  `investment_id` int(6) NOT NULL,
  `investment_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `investment_initial` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `investment_type` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `investment_minimum` int(6) NOT NULL,
  `investment_interest` double NOT NULL,
  `investment_risk_level` double NOT NULL,
  `investment_nav` double NOT NULL,
  `investment_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`investment_id`, `investment_name`, `investment_initial`, `investment_type`, `investment_minimum`, `investment_interest`, `investment_risk_level`, `investment_nav`, `investment_update_date`) VALUES
(50000, 'กองทุนเปิดไทยพาณิชหุ้นระยะยาว พลัส', 'SCBLT2', 'กองทุนรวม LTF', 1000, 0.06, 6, 26.54128, '2562-11-21'),
(50001, 'กองทุนเปิดไทยพาณิชธนอนันต์', 'SCBDA', 'กองทุนรวมตราสารทุน', 500, 0.08, 5, 9.4877, '0000-00-00'),
(50002, 'กองทุนเปิดไทยภาณิชย์หุ้นทุน', 'SCBMSEP', 'กองทุนรวมตราสารทุน', 800, 0.06, 4, 16.2256, '0000-00-00'),
(50003, 'กองทุนเปิดไทยภาณิชย์ SET50 INDEX', 'ACBSET50', 'กองทุนรวมตราสารทุน', 800, 0.058, 5, 20.4201, '0000-00-00'),
(50004, 'กองทุนเปิกกรุงศรีหุ้นไดนามิคปันผล', 'KFDNM-D', 'กองทุนรวมตราสารทุน', 1000, 0.07, 5, 9.4992, '0000-00-00'),
(50005, 'กองทุนเปิดธนชาติหุ้นปันผล', 'T-DIV', 'กองทุนรวมตราสารทุน', 800, 0.07, 7, 9.6007, '0000-00-00'),
(50006, 'กองทุนเปิดทหารไทย ธนไพบูลย์', 'TMBABF', 'กองทุนรวมตราสารหนี้', 1000, 0.085, 7, 11.5534, '0000-00-00'),
(50007, 'กองทุนเปิด ทิสโก้ พันธบัตร 1 ปี', 'TBONDPVD', 'กองทุนรวมตราสารหนี้', 5000, 0.07, 6, 10.0845, '0000-00-00'),
(50009, 'กองทุนเปิด ทิสโก้ หน่อยลงทุน A', 'TISCOLTF-A', 'กองทุนรวม LTF', 1000, 0.08, 7, 37.5067, '0000-00-00'),
(50010, 'กองทุนเปิด ทิสโก้ เอเชียน รีท', 'TAREIT', 'กองทุนรวมหน่วยลงทุน', 1000, 0.08, 6, 10.0581, '0000-00-00'),
(50011, 'กองทุนเปิดเค โกลบอล แอลโลเคชั่น', 'KGARMF', 'กองทุนรวม RMF', 1000, 0.07, 6, 13.4489, '0000-00-00'),
(50012, 'กองทุนเปิดเค เซ็ท 50 เพื่อการเลี้ยงชีพ', 'KS50RMF', 'กองทุนรวม RMF', 1000, 0.06, 6, 13.4098, '0000-00-00'),
(50013, 'กองทุนเปิด Mtrack Energy ETF', 'ENGY', 'กองทุนรวม ETF', 500, 0.07, 5, 6.3065, '0000-00-00'),
(50014, 'กองทุนเปิดทหารไทย โกลด์ ฟันด์', 'TMBGOLD', 'กองทุนรวมทองคำ', 1000, 0.07, 7, 17.7925, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `investment_company`
--

CREATE TABLE `investment_company` (
  `investment_id` int(6) NOT NULL,
  `company_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `investment_company`
--

INSERT INTO `investment_company` (`investment_id`, `company_id`) VALUES
(50000, 30006),
(50001, 30006),
(50002, 30006),
(50003, 30006),
(50004, 30002),
(50005, 30003),
(50006, 30004),
(50007, 30005),
(50009, 30005),
(50010, 30005),
(50011, 30001),
(50012, 30001),
(50013, 30004),
(50014, 30004);

-- --------------------------------------------------------

--
-- Table structure for table `monthly_fee`
--

CREATE TABLE `monthly_fee` (
  `fee_id` int(6) NOT NULL,
  `fee_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `fee_price` int(7) NOT NULL,
  `fee_period` int(11) NOT NULL,
  `fee_type` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `monthly_fee`
--

INSERT INTO `monthly_fee` (`fee_id`, `fee_name`, `fee_price`, `fee_period`, `fee_type`) VALUES
(20014, 'Netflix-S', 420, 15, 'เอนเตอร์เทนเมนท์'),
(20015, 'Netflix-M', 350, 15, 'เอนเตอร์เทนเมนท์'),
(20016, 'Netflix-L', 499, 25, 'เอนเตอร์เทนเมนท์'),
(20017, 'ประกันสุขภาพ', 1000, 20, 'ค่าประกัน'),
(20018, 'ประกันชีวิต', 2000, 25, 'ค่าประกัน'),
(20019, 'ค่าเช่าห้อง', 5000, 25, 'ค่าเช่า'),
(20020, 'ค่าโทรศัพท์', 900, 15, 'ค่าโทรศัพท์'),
(20021, 'ค่ารถเมย์รายเดือน', 500, 25, 'ค่าสาธารณูปโภค'),
(20022, 'ค่าอินเตอร์เน็ต', 1000, 25, 'ค่าอินเตอร์เน็ต'),
(20023, 'ค่าผ่อน iphone 99', 99000, 25, 'ค่าผ่อนชำระ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `account_bank`
--
ALTER TABLE `account_bank`
  ADD PRIMARY KEY (`username`,`bank_id`),
  ADD KEY `account_bank_ibfk_1` (`bank_id`);

--
-- Indexes for table `account_credit`
--
ALTER TABLE `account_credit`
  ADD PRIMARY KEY (`username`,`credit_id`) USING BTREE,
  ADD KEY `account_credit_ibfk_1` (`credit_id`);

--
-- Indexes for table `account_investment`
--
ALTER TABLE `account_investment`
  ADD PRIMARY KEY (`username`,`investment_id`) USING BTREE,
  ADD KEY `account_investment_ibfk_2` (`investment_id`);

--
-- Indexes for table `account_monthly_fee`
--
ALTER TABLE `account_monthly_fee`
  ADD PRIMARY KEY (`username`,`fee_id`) USING BTREE,
  ADD KEY `account_monthly_fee_ibfk_1` (`fee_id`);

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`time_log`,`username`) USING BTREE;

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `credit`
--
ALTER TABLE `credit`
  ADD PRIMARY KEY (`credit_id`);

--
-- Indexes for table `credit_company`
--
ALTER TABLE `credit_company`
  ADD PRIMARY KEY (`credit_id`,`company_id`),
  ADD KEY `credit_company_ibfk_2` (`company_id`);

--
-- Indexes for table `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`investment_id`);

--
-- Indexes for table `investment_company`
--
ALTER TABLE `investment_company`
  ADD PRIMARY KEY (`investment_id`,`company_id`),
  ADD KEY `investment_company_ibfk_2` (`company_id`);

--
-- Indexes for table `monthly_fee`
--
ALTER TABLE `monthly_fee`
  ADD PRIMARY KEY (`fee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `bank_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60015;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30012;

--
-- AUTO_INCREMENT for table `credit`
--
ALTER TABLE `credit`
  MODIFY `credit_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40009;

--
-- AUTO_INCREMENT for table `investment`
--
ALTER TABLE `investment`
  MODIFY `investment_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50015;

--
-- AUTO_INCREMENT for table `monthly_fee`
--
ALTER TABLE `monthly_fee`
  MODIFY `fee_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20024;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account_bank`
--
ALTER TABLE `account_bank`
  ADD CONSTRAINT `account_bank_ibfk_1` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`bank_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_bank_ibfk_2` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `account_credit`
--
ALTER TABLE `account_credit`
  ADD CONSTRAINT `account_credit_ibfk_1` FOREIGN KEY (`credit_id`) REFERENCES `credit` (`credit_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_credit_ibfk_2` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON UPDATE CASCADE;

--
-- Constraints for table `account_investment`
--
ALTER TABLE `account_investment`
  ADD CONSTRAINT `account_investment_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_investment_ibfk_2` FOREIGN KEY (`investment_id`) REFERENCES `investment` (`investment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `account_monthly_fee`
--
ALTER TABLE `account_monthly_fee`
  ADD CONSTRAINT `account_monthly_fee_ibfk_1` FOREIGN KEY (`fee_id`) REFERENCES `monthly_fee` (`fee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_monthly_fee_ibfk_2` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `credit_company`
--
ALTER TABLE `credit_company`
  ADD CONSTRAINT `credit_company_ibfk_1` FOREIGN KEY (`credit_id`) REFERENCES `credit` (`credit_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `credit_company_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `investment_company`
--
ALTER TABLE `investment_company`
  ADD CONSTRAINT `investment_company_ibfk_1` FOREIGN KEY (`investment_id`) REFERENCES `investment` (`investment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `investment_company_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
