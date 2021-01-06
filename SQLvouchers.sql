-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 05 Sty 2021, 18:50
-- Wersja serwera: 8.0.15
-- Wersja PHP: 7.3.3RC1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `vouchers`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_12_29_210229_create_vouchers_table', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to_email` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `vouchers`
--

INSERT INTO `vouchers` (`id`, `from`, `from_email`, `to`, `to_email`, `amount`, `message`) VALUES
(1, 'Dr. Loyal Murray I', 'dibbert.kenya@fisher.com', 'Dixie Keebler III', 'angelina.mayer@gulgowski.info', 40, 'Lory hastily. \'I don\'t know where Dinn may be,\' said the Gryphon, and, taking Alice by the time they had a vague sort of use in knocking,\' said the.'),
(2, 'Prof. Leanne Koch', 'jessica59@schinner.biz', 'Lula Pfeffer', 'veum.carlee@hotmail.com', 10, 'And so it was indeed: she was in the morning, just time to avoid shrinking away altogether. \'That WAS a curious croquet-ground in her life; it was.'),
(3, 'Orpha Koelpin MD', 'miller.edward@gmail.com', 'Dr. Oral Koepp DVM', 'arnaldo.paucek@hotmail.com', 60, 'Alice, a little glass table. \'Now, I\'ll manage better this time,\' she said aloud. \'I must be on the slate. \'Herald, read the accusation!\' said the.'),
(4, 'Dr. Lucy Eichmann III', 'princess.hagenes@hudson.net', 'Emery Ledner', 'smith.marjolaine@dare.net', 40, 'She did not see anything that looked like the Queen?\' said the Queen, and in another minute the whole pack of cards: the Knave of Hearts, he stole.'),
(5, 'Miss Gudrun Medhurst', 'sferry@pfeffer.com', 'Brown Hane', 'feeney.brayan@littel.com', 90, 'I? Ah, THAT\'S the great question is, what?\' The great question certainly was, what? Alice looked down at them, and it\'ll sit up and went on \'And how.'),
(6, 'Terrell Daugherty', 'kunde.karl@yost.com', 'Mrs. Nadia Kassulke', 'citlalli.kilback@hotmail.com', 70, 'Mouse to Alice severely. \'What are you getting on?\' said the Gryphon: and Alice was not an encouraging tone. Alice looked all round the court was in.'),
(7, 'Clifford Wiza', 'schiller.jaleel@considine.biz', 'Mrs. Liza Konopelski', 'ajenkins@yahoo.com', 70, 'Alice knew it was labelled \'ORANGE MARMALADE\', but to her ear. \'You\'re thinking about something, my dear, YOU must cross-examine THIS witness.\'.'),
(8, 'Andreane Hammes', 'nprice@stehr.com', 'Zula Veum', 'selina.okeefe@dach.com', 50, 'This time there could be no doubt that it might end, you know,\' said Alice, feeling very glad she had not got into a butterfly, I should be like.'),
(9, 'Cooper Nitzsche', 'ogrimes@pfeffer.com', 'Theron Jacobson', 'earline.dibbert@gmail.com', 50, 'Queen shrieked out. \'Behead that Dormouse! Turn that Dormouse out of sight; and an old crab, HE was.\' \'I never heard it say to itself, half to.'),
(10, 'Christina Friesen', 'dcorwin@gmail.com', 'Mr. Dallas Roberts', 'khalil.terry@rosenbaum.org', 10, 'Alice began to cry again, for she was about a thousand times as large as himself, and this time with great curiosity. \'Soles and eels, of course,\'.'),
(11, 'Dr. Loyal Murray I', 'dibbert.kenya@fisher.com', 'Dixie Keebler III', 'angelina.mayer@gulgowski.info', 40, 'Lory hastily. \'I don\'t know where Dinn may be,\' said the Gryphon, and, taking Alice by the time they had a vague sort of use in knocking,\' said the.'),
(12, 'Pawel', 'pawel@fisher.com', 'Ala', 'ala@gulgowski.info', 40, 'Happy new year'),
(13, 'Marta', 'marta@gggr.com', 'Ola', 'ola@gui.info', 100, 'Merry xmas'),
(14, 'Marta', 'marta@gggr.com', 'Ola', 'ola@gui.info', 100, 'Merry xmas'),
(15, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(16, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(17, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(18, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(19, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(20, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(21, 'Pawel', 'kossy', 'pawel', 'kossy', 30, 'message'),
(22, 'Konrad', 'konrad@gmail.com', 'Katarzyna', 'katarzyna@gmail.com', 30, 'Wssystkiego najlepszego'),
(23, 'dsdds', 'sdsd', 'dsd', 'sdsdsd', 30, 'fff'),
(24, 'pawel', 'kossy77@gmail.com', 'tyutyu', 'kossy77@gmail.com', 30, 'bnbvmnbm'),
(25, 'pawel', 'kossy77@gmail.com', 'koss', 'kossy77@gmail.com', 30, NULL);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
