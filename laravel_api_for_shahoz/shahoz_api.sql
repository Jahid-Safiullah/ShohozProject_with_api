-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 08:52 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shahoz_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `buses`
--

CREATE TABLE `buses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bus_name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `operator_id` int(11) NOT NULL,
  `total_seats` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `buses`
--

INSERT INTO `buses` (`id`, `bus_name`, `code`, `image`, `operator_id`, `total_seats`, `status`, `created_at`, `updated_at`) VALUES
(5, 'jljflsj', 'sfdsf', '1703049917.jpg', 20, 50, 1, '2023-12-19 23:25:17', '2023-12-19 23:25:17'),
(6, 'noha expresss', 'HN-16', '1703050207.webp', 20, 40, 1, '2023-12-19 23:30:07', '2023-12-19 23:30:07'),
(7, 'Hsofpjeop', 'H-6645', '1703306317.jpg', 2, 40, 1, '2023-12-22 22:38:37', '2023-12-22 22:38:37'),
(8, 'H-5461', 'S120000', '1703306403.jpg', 112, 40, 1, '2023-12-22 22:40:03', '2023-12-22 22:40:03'),
(9, 'Hanif-520', 'H-5245200HG', '1703569657.jpg', 49, 40, 1, '2023-12-25 23:47:37', '2023-12-25 23:47:37');

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(2, 'Chittagong', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(3, 'Rajshahi', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(4, 'Khulna', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(5, 'Barisal', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(6, 'Sylhet', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(7, 'Rangpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(8, 'Mymensingh', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(9, 'Comilla', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(10, 'Feni', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(11, 'Noakhali', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(12, 'Chandpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(13, 'Laxmipur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(14, 'Bhola', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(15, 'Jhalokathi', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(16, 'Patuakhali', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(17, 'Pirojpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(18, 'Barguna', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(19, 'Madaripur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(20, 'Shariatpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(21, 'Gopalganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(22, 'Faridpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(23, 'Magura', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(24, 'Jhenaidah', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(25, 'Narail', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(26, 'Jessore', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(27, 'Satkhira', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(28, 'Meherpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(29, 'Chuadanga', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(30, 'Kushtia', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(31, 'Bagerhat', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(32, 'Sirajganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(33, 'Pabna', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(34, 'Bogra', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(35, 'Joypurhat', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(36, 'Naogaon', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(37, 'Natore', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(38, 'Chapainawabganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(39, 'Kishoreganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(40, 'Netrokona', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(41, 'Brahmanbaria', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(42, 'Habiganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(43, 'Maulvibazar', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(44, 'Sunamganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(45, 'Jamalpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(46, 'Narsingdi', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(47, 'Tangail', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(48, 'Munshiganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(49, 'Narayanganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(50, 'Gazipur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(51, 'Shariatpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(52, 'Sherpur', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(53, 'Manikganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(54, 'Joypurhat', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(55, 'Rajbari', '2023-12-25 21:57:13', '2023-12-25 21:57:13'),
(56, 'Kishoreganj', '2023-12-25 21:57:13', '2023-12-25 21:57:13');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_29_133958_create_college_table', 1),
(6, '2023_10_03_121721_create_people_table', 1),
(7, '2023_11_28_154308_create_buses_table', 1),
(8, '2023_11_28_154430_create_operators_table', 1),
(9, '2023_12_23_050219_create_routes_table', 2),
(10, '2023_12_24_154635_create_districts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `operators`
--

CREATE TABLE `operators` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `operator_name` varchar(255) DEFAULT NULL,
  `operator_email` varchar(255) DEFAULT NULL,
  `operator_phone` varchar(255) DEFAULT NULL,
  `operator_address` varchar(255) DEFAULT NULL,
  `operator_logo` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `operators`
--

INSERT INTO `operators` (`id`, `operator_name`, `operator_email`, `operator_phone`, `operator_address`, `operator_logo`, `status`, `created_at`, `updated_at`) VALUES
(50, 'Hanif Enterprise', 'hanif@gmail.com', '017455254654', 'rgvsv', '1702102340.jpg', 1, '2023-12-09 00:12:20', '2023-12-09 00:12:20'),
(54, 'Samoly Enterprise', 'samoly@gmail.com', '017455254654', 'dfcasd', '1703046120.webp', 1, '2023-12-19 22:22:00', '2023-12-19 22:22:00'),
(55, 'Samoly Enterprise', 'samoly@gmail.com', '017455254654', 'dfcasd', '1703046913.webp', 1, '2023-12-19 22:35:13', '2023-12-19 22:35:13');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE `routes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `bus` varchar(255) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `departure_time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `routes`
--

INSERT INTO `routes` (`id`, `from`, `to`, `bus`, `cost`, `departure_date`, `departure_time`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', 'barishal', 'H-6541', NULL, NULL, NULL, '2023-12-22 23:50:26', '2023-12-22 23:50:26'),
(2, 'Dhaka', 'barishal', 'H-6541', NULL, NULL, NULL, '2023-12-22 23:53:44', '2023-12-22 23:53:44'),
(3, NULL, 'chitagong', 'null', NULL, '2023-12-24', '13:00:00', '2023-12-23 00:03:50', '2023-12-23 00:03:50'),
(4, NULL, 'chitagong', 'null', NULL, '2023-12-24', '13:00:00', '2023-12-23 00:04:20', '2023-12-23 00:04:20'),
(5, 'dhaka', 'india', 'H-3216', NULL, '2023-12-25', '04:14:00', '2023-12-23 00:10:22', '2023-12-23 00:10:22'),
(6, 'dhaka', 'chitagong', 'S-462', '500.00', '2023-12-25', '03:25:00', '2023-12-23 00:22:13', '2023-12-23 00:22:13'),
(7, 'Dhaka', 'Jhalokathi', '8', '450.00', '2023-12-30', '10:04:00', '2023-12-25 22:04:41', '2023-12-25 22:04:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'tarikul', 'tarikul@gmail.com', NULL, '$2y$10$hhXs4BTC.g5ieNzPWCsk2.ds72JYFEbjlwQkteHoCW8wmhHEp0GGu', NULL, '2023-12-03 00:54:46', '2023-12-03 00:54:46'),
(2, 'akbor', 'akbor@gmail.com', NULL, '$2y$10$OORpD3Iarfgn.kKhcPTNiu04UOcSaJCovETp68gSnBoSL2DR4oUTa', NULL, '2023-12-05 23:04:29', '2023-12-05 23:04:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buses`
--
ALTER TABLE `buses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operators`
--
ALTER TABLE `operators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buses`
--
ALTER TABLE `buses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `operators`
--
ALTER TABLE `operators`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `routes`
--
ALTER TABLE `routes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
