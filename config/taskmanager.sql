-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2025 at 01:24 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `action` varchar(255) NOT NULL,
  `impactedData` text,
  `ipAddress` varchar(255) DEFAULT NULL,
  `userAgent` varchar(255) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `userId`, `action`, `impactedData`, `ipAddress`, `userAgent`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 8, 'Created a new task', '{\"id\":38,\"title\":\"sgzsffffffffffffff\",\"description\":\"gggggggggggggggg\",\"status\":\"Pending\",\"priority\":\"Low\",\"dueDate\":\"2025-07-10T00:00:00.000Z\",\"user_id\":8,\"updatedAt\":\"2025-06-25T07:27:07.274Z\",\"createdAt\":\"2025-06-25T07:27:07.274Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 12:57:07', '2025-06-25 12:57:07', '2025-06-25 12:57:07'),
(2, 8, 'Updated profile', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 12:59:11', '2025-06-25 12:59:11', '2025-06-25 12:59:11'),
(3, 8, 'Updated profile', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 13:05:13', '2025-06-25 13:05:13', '2025-06-25 13:05:13'),
(4, 8, 'Updated profile', '{\"id\":8,\"firstName\":\"Pawan\",\"lastName\":\"Dubey\",\"email\":\"pawan.dubey.cpcb@gmail.com\",\"mobile\":\"8323367522\",\"username\":\"pvn123\",\"password\":\"$2b$10$2b.XTTpqmXhdm0NFEOuKSOOMRZ5jj4bHXkJf3JVpEFI0wEaBGdSfi\",\"roleId\":2,\"profile_img\":\"user_1750665831171.jpg\",\"createdAt\":\"2025-05-22T11:53:52.000Z\",\"updatedAt\":\"2025-06-25T07:39:17.547Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 13:09:17', '2025-06-25 13:09:17', '2025-06-25 13:09:17'),
(5, 2, 'Member logged in', '{\"id\":2,\"firstName\":\"Rahul\",\"lastName\":\"Tickoo\",\"email\":\"Rahul.Tickoo@in.ey.com\",\"mobile\":\"9893734530\",\"username\":\"rahul_tickoo\",\"password\":\"$2b$10$Q3L3YYLk25qB.z0O1NdPT..0X51qBYO.vNtFhnK.a2EFPotTnx3xe\",\"roleId\":2,\"profile_img\":\"user_1750664308795.jpeg\",\"createdAt\":\"2025-05-16T02:05:10.000Z\",\"updatedAt\":\"2025-06-23T07:38:28.000Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 13:14:05', '2025-06-25 13:14:05', '2025-06-25 13:14:05'),
(6, 2, 'Task updated', '{\"id\":28,\"user_id\":2,\"title\":\"make a program to display current date and time\",\"description\":\"make a program to display current date and time\",\"status\":\"Completed\",\"priority\":\"Low\",\"dueDate\":\"2025-06-21T00:00:00.000Z\",\"createdAt\":\"2025-06-10T07:50:53.000Z\",\"updatedAt\":\"2025-06-25T08:05:44.999Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 13:35:45', '2025-06-25 13:35:45', '2025-06-25 13:35:45'),
(7, 2, 'Task deleted', '{\"id\":19,\"user_id\":2,\"title\":\"test test test\",\"description\":\"sdgsggggggggggggg\",\"status\":\"In-Progress\",\"priority\":\"Medium\",\"dueDate\":\"2025-05-25T00:00:00.000Z\",\"createdAt\":\"2025-05-20T07:22:27.000Z\",\"updatedAt\":\"2025-06-09T18:27:24.000Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 13:38:39', '2025-06-25 13:38:39', '2025-06-25 13:38:39'),
(8, 1, 'Member logged in', '{\"id\":1,\"firstName\":\"Admin\",\"lastName\":\"user\",\"email\":\"admin@test.com\",\"mobile\":\"9023476453\",\"username\":\"admin_123\",\"password\":\"$2b$10$oCGSkGPtVES0ogmHetaPZ.vuZq0u5pxmQne3gyQ6..0q1WKw3uJwi\",\"roleId\":1,\"profile_img\":\"user_1750669070288.png\",\"createdAt\":\"2025-05-16T01:33:13.000Z\",\"updatedAt\":\"2025-06-23T08:57:50.000Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 14:02:10', '2025-06-25 14:02:10', '2025-06-25 14:02:10'),
(9, 2, 'Member logged in', '{\"id\":2,\"firstName\":\"Rahul\",\"lastName\":\"Tickoo\",\"email\":\"Rahul.Tickoo@in.ey.com\",\"mobile\":\"9893734530\",\"username\":\"rahul_tickoo\",\"password\":\"$2b$10$Q3L3YYLk25qB.z0O1NdPT..0X51qBYO.vNtFhnK.a2EFPotTnx3xe\",\"roleId\":2,\"profile_img\":\"user_1750664308795.jpeg\",\"createdAt\":\"2025-05-16T02:05:10.000Z\",\"updatedAt\":\"2025-06-23T07:38:28.000Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 14:08:16', '2025-06-25 14:08:16', '2025-06-25 14:08:16'),
(10, 2, 'rahul_tickoo created a new task', '{\"id\":39,\"title\":\"get MPR signed\",\"description\":\"asdfa sdgsdfgsdg\",\"status\":\"Pending\",\"priority\":\"High\",\"dueDate\":\"2025-06-28T00:00:00.000Z\",\"user_id\":2,\"updatedAt\":\"2025-06-25T08:38:41.063Z\",\"createdAt\":\"2025-06-25T08:38:41.063Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 14:08:41', '2025-06-25 14:08:41', '2025-06-25 14:08:41'),
(11, 1, 'admin_123 logged in', '{\"id\":1,\"firstName\":\"Admin\",\"lastName\":\"user\",\"email\":\"admin@test.com\",\"mobile\":\"9023476453\",\"username\":\"admin_123\",\"password\":\"$2b$10$oCGSkGPtVES0ogmHetaPZ.vuZq0u5pxmQne3gyQ6..0q1WKw3uJwi\",\"roleId\":1,\"profile_img\":\"user_1750669070288.png\",\"createdAt\":\"2025-05-16T01:33:13.000Z\",\"updatedAt\":\"2025-06-23T08:57:50.000Z\"}', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '2025-06-25 14:17:12', '2025-06-25 14:17:12', '2025-06-25 14:17:12');

-- --------------------------------------------------------

--
-- Table structure for table `chatbot_responses`
--

CREATE TABLE `chatbot_responses` (
  `id` int(10) UNSIGNED NOT NULL,
  `keyword` varchar(255) NOT NULL,
  `response` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chatbot_responses`
--

INSERT INTO `chatbot_responses` (`id`, `keyword`, `response`, `createdAt`, `updatedAt`) VALUES
(1, 'hello', 'Hi! How can I help you today?', '2025-06-19 21:46:23', '2025-06-19 21:46:23'),
(2, 'bye', 'Goodbye! Have a great day!', '2025-06-19 21:46:23', '2025-06-19 21:46:23'),
(3, 'help', 'Sure! What do you need help with?', '2025-06-19 21:46:23', '2025-06-19 21:46:23'),
(4, 'add task', 'Sure! What would you like to name your task?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(5, 'create task', 'Let me help you create a new task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(6, 'new task', 'Got it. Please provide the task details.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(7, 'delete task', 'Which task do you want to delete?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(8, 'remove task', 'Please specify the task you want to remove.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(9, 'update task', 'Tell me the updated information for your task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(10, 'edit task', 'Sure, what changes do you want to make?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(11, 'complete task', 'Task marked as complete!', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(12, 'incomplete task', 'Task status changed to incomplete.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(13, 'list tasks', 'Here are all your current tasks.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(14, 'show tasks', 'Displaying all tasks now.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(15, 'view tasks', 'Here is your to-do list.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(16, 'overdue tasks', 'These are the overdue tasks.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(17, 'pending tasks', 'Here are your pending tasks.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(18, 'completed tasks', 'These tasks have been completed.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(19, 'today tasks', 'These are your tasks for today.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(20, 'tomorrow tasks', 'Here are tasks scheduled for tomorrow.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(21, 'next week tasks', 'These are your tasks for next week.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(22, 'priority task', 'Do you want to mark this as high priority?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(23, 'urgent task', 'This task is now marked as urgent.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(24, 'add due date', 'What’s the due date for this task?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(25, 'set reminder', 'Setting a reminder for this task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(26, 'task reminder', 'Reminder set successfully!', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(27, 'task description', 'Please provide a description for the task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(28, 'task title', 'What should be the task title?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(29, 'task notes', 'You can add notes to this task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(30, 'search tasks', 'Searching your tasks...', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(31, 'find task', 'Let me find that task for you.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(32, 'sort tasks', 'Would you like to sort by date or priority?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(33, 'filter tasks', 'You can filter by status or date.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(34, 'share task', 'Task has been shared with your team.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(35, 'assign task', 'To whom should I assign this task?', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(36, 'collaborate task', 'Invite others to collaborate on this task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(37, 'task completed', 'Awesome! You completed the task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(38, 'missed task', 'Looks like you missed this task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(39, 'clear completed', 'Cleared all completed tasks.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(40, 'archive task', 'Task archived successfully.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(41, 'restore task', 'Task has been restored.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(42, 'task history', 'Here is the activity history for your task.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(43, 'task status', 'Current task status is: In Progress.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(44, 'task progress', 'You are 50% done with your tasks today.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(45, 'help', 'You can add, edit, or delete tasks. Just ask me how.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(46, 'commands', 'Try saying \"add task\" or \"show tasks\".', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(47, 'login', 'Please log in to manage your to-do list.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(48, 'logout', 'You’ve been logged out from the to-do system.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(49, 'register', 'Sign up to create and manage your to-do tasks.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(50, 'forgot password', 'Click here to reset your password.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(51, 'dashboard', 'Welcome to your task dashboard.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(52, 'due today', 'These tasks are due today.', '2025-06-19 22:05:35', '2025-06-19 22:05:35'),
(53, 'due tomorrow', 'Tasks due tomorrow are listed here.', '2025-06-19 22:05:35', '2025-06-19 22:05:35');

-- --------------------------------------------------------

--
-- Table structure for table `chat_history`
--

CREATE TABLE `chat_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sender_type` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `session_id` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat_history`
--

INSERT INTO `chat_history` (`id`, `user_id`, `sender_type`, `message`, `session_id`, `timestamp`) VALUES
(1, 2, 'Team Member', 'hello', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:40:04'),
(2, 0, 'Bot', 'Hi! How can I help you today?', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:40:04'),
(3, 2, 'Team Member', 'add task', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:40:58'),
(4, 0, 'Bot', 'Sure! What would you like to name your task?', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:40:58'),
(5, 2, 'Team Member', 'new task', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:41:26'),
(6, 0, 'Bot', 'Got it. Please provide the task details.', 'sns2MxV8cWc6s1HsAAAF', '2025-06-20 12:41:26'),
(7, 2, 'Team Member', 'hello', '8LcWEmWXgJtmb3iLAAAR', '2025-06-20 12:42:27'),
(8, 0, 'Bot', 'Hi! How can I help you today?', '8LcWEmWXgJtmb3iLAAAR', '2025-06-20 12:42:27'),
(9, 2, 'Team Member', 'hello', 'iBnWK69DkSQuUYYYAAAF', '2025-06-20 13:47:30'),
(10, 0, 'Bot', 'Hi! How can I help you today?', 'iBnWK69DkSQuUYYYAAAF', '2025-06-20 13:47:30'),
(11, 2, 'Team Member', 'hello', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:26:20'),
(12, 0, 'Bot', 'Hi! How can I help you today?', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:26:20'),
(13, 2, 'Team Member', 'help', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:26:42'),
(14, 0, 'Bot', 'Sure! What do you need help with?', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:26:42'),
(15, 2, 'Team Member', 'afdssdfgds', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:27:15'),
(16, 0, 'Bot', 'Sorry! I didn’t understand that.', 'umZ4xHnVVyUNdkmoAAAD', '2025-06-20 15:27:15'),
(17, 2, 'Team Member', 'hello', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:11'),
(18, 0, 'Bot', 'Hi! How can I help you today?', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:11'),
(19, 2, 'Team Member', 'hello', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:14'),
(20, 0, 'Bot', 'Hi! How can I help you today?', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:14'),
(21, 2, 'Team Member', 'hello', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:19'),
(22, 2, 'Bot', 'Hi! How can I help you today?', 'pmAObg5NXEYl9yYFAAAF', '2025-06-20 15:32:19'),
(23, 2, 'Team Member', 'hello', 'Jv0i0wQrKKEajtiiAAAP', '2025-06-20 15:40:01'),
(24, 2, 'Bot', 'Hi! How can I help you today?', 'Jv0i0wQrKKEajtiiAAAP', '2025-06-20 15:40:01'),
(25, 2, 'Team Member', 'hello', 'sxsoiWSlRuTcqN8DAAAT', '2025-06-20 15:44:12'),
(26, 0, 'Bot', 'Hi! How can I help you today?', 'sxsoiWSlRuTcqN8DAAAT', '2025-06-20 15:44:12'),
(27, 2, 'Team Member', 'task', 'sxsoiWSlRuTcqN8DAAAT', '2025-06-20 15:44:20'),
(28, 0, 'Bot', 'Sure! What would you like to name your task?', 'sxsoiWSlRuTcqN8DAAAT', '2025-06-20 15:44:20'),
(29, 8, 'Team Member', 'hello', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:07'),
(30, 0, 'Bot', 'Hi! How can I help you today?', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:07'),
(31, 8, 'Team Member', 'task', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:12'),
(32, 0, 'Bot', 'Sure! What would you like to name your task?', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:12'),
(33, 8, 'Team Member', 'update', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:20'),
(34, 0, 'Bot', 'Tell me the updated information for your task.', 'PR8JlVvZqqObgdO2AAAK', '2025-06-20 17:24:20'),
(35, 8, 'Team Member', 'xfgdsgfsdg', 'pYCcPNWjG6ScPycLAAAM', '2025-06-20 17:36:08'),
(36, 0, 'Bot', 'Sorry! I didn’t understand that.', 'pYCcPNWjG6ScPycLAAAM', '2025-06-20 17:36:08'),
(37, 8, 'Team Member', 'sdfsfsdafd', 'vECJPivFCESHAaQ1AAAO', '2025-06-20 17:36:18'),
(38, 0, 'Bot', 'Sorry! I didn’t understand that.', 'vECJPivFCESHAaQ1AAAO', '2025-06-20 17:36:18'),
(39, 1, 'Team Member', 'hello', 'IWkfqN2RuYZbhxPMAAA2', '2025-06-20 17:38:24'),
(40, 0, 'Bot', 'Hi! How can I help you today?', 'IWkfqN2RuYZbhxPMAAA2', '2025-06-20 17:38:24'),
(41, 2, 'Team Member', 'hello', 'T8UdFvjhEVrRMhPKAAAx', '2025-06-21 11:44:46'),
(42, 0, 'Bot', 'Hi! How can I help you today?', 'T8UdFvjhEVrRMhPKAAAx', '2025-06-21 11:44:46'),
(43, 2, 'Team Member', 'dfsdgfd dfgdf ddfghdfhg dsgfsdgfsdgfsdgfs dfghdfhgdf dfghdgsfsdgf sddfghfdhg', 'T8UdFvjhEVrRMhPKAAAx', '2025-06-21 11:50:07'),
(44, 0, 'Bot', 'Sorry! I didn’t understand that.', 'T8UdFvjhEVrRMhPKAAAx', '2025-06-21 11:50:07'),
(45, 2, 'Team Member', 'edit', 'DIUjhkNr4qLyOgLnAAAD', '2025-06-21 12:26:56'),
(46, 0, 'Bot', 'Sure, what changes do you want to make?', 'DIUjhkNr4qLyOgLnAAAD', '2025-06-21 12:26:56'),
(47, 2, 'Team Member', 'set reminder', 'dswSXKOtfa41tb3ZAAAD', '2025-06-21 12:28:34'),
(48, 0, 'Bot', 'Setting a reminder for this task.', 'dswSXKOtfa41tb3ZAAAD', '2025-06-21 12:28:34'),
(49, 2, 'Team Member', 'great', 'dswSXKOtfa41tb3ZAAAD', '2025-06-21 12:33:32'),
(50, 0, 'Bot', 'Sorry! I didn’t understand that.', 'dswSXKOtfa41tb3ZAAAD', '2025-06-21 12:33:32'),
(51, 8, 'Team Member', 'hello', 'j8qK7WLmlGMamv-kAAAH', '2025-06-21 12:41:26'),
(52, 0, 'Bot', 'Hi! How can I help you today?', 'j8qK7WLmlGMamv-kAAAH', '2025-06-21 12:41:26'),
(53, 8, 'Team Member', 'task', 'j8qK7WLmlGMamv-kAAAH', '2025-06-21 12:41:30'),
(54, 0, 'Bot', 'Sure! What would you like to name your task?', 'j8qK7WLmlGMamv-kAAAH', '2025-06-21 12:41:30'),
(55, 8, 'Team Member', 'task', 'gs5dtwR6x4N3jiW0AAAB', '2025-06-21 12:43:17'),
(56, 0, 'Bot', 'Sure! What would you like to name your task?', 'gs5dtwR6x4N3jiW0AAAB', '2025-06-21 12:43:17'),
(57, 8, 'Team Member', 'edit', 'gs5dtwR6x4N3jiW0AAAB', '2025-06-21 12:43:22'),
(58, 8, 'Bot', 'Sure, what changes do you want to make?', 'gs5dtwR6x4N3jiW0AAAB', '2025-06-21 12:43:22'),
(59, 8, 'Team Member', 'hi', 'xkl0c9ETT5CiEqtKAAAB', '2025-06-21 12:43:59'),
(60, 8, 'Bot', 'Task archived successfully.', 'xkl0c9ETT5CiEqtKAAAB', '2025-06-21 12:43:59'),
(61, 8, 'Team Member', 'safas sfgfsdgsdgf', 'WtpRDePMmnEypd__AAAy', '2025-06-21 14:59:42'),
(62, 8, 'Bot', 'Sorry! I didn’t understand that.', 'WtpRDePMmnEypd__AAAy', '2025-06-21 14:59:42'),
(63, 8, 'Team Member', 'task', 'VXyhidyDH9xY048tAAAp', '2025-06-21 17:30:18'),
(64, 8, 'Bot', 'Sure! What would you like to name your task?', 'VXyhidyDH9xY048tAAAp', '2025-06-21 17:30:18'),
(65, 8, 'Team Member', 'edit', 'VXyhidyDH9xY048tAAAp', '2025-06-21 17:30:25'),
(66, 8, 'Bot', 'Sure, what changes do you want to make?', 'VXyhidyDH9xY048tAAAp', '2025-06-21 17:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2025-05-18 19:16:07', '2025-05-18 19:16:07'),
(2, 'team member', '2025-05-18 19:16:07', '2025-05-18 19:16:07');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250519095241-add-priority-to-tasks.js'),
('20250519104727-add-dueDate-to-tasks.js'),
('20250619154311-create-chatbot-responses.js');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT 'Pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text,
  `priority` enum('Low','Medium','High') NOT NULL DEFAULT 'Medium',
  `dueDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `status`, `createdAt`, `updatedAt`, `user_id`, `description`, `priority`, `dueDate`) VALUES
(3, 'use bootstrap modal  to edit task', 'Completed', '2025-05-15 11:27:34', '2025-05-19 17:03:34', 3, 'sdfgsd sfsdgfsdfg', 'Low', '2025-05-23 05:30:00'),
(6, 'Dilip please learn html and bootsstrap css framework', 'In-Progress', '2025-05-15 16:13:37', '2025-05-20 12:01:20', 2, 'Dilip please learn html and bootsstrap css framework', 'Medium', '2025-05-23 05:30:00'),
(11, 'Make aloo paratha', 'In-Progress', '2025-05-18 20:12:02', '2025-05-19 16:46:23', 6, 'Make aloo paratha - asdfja sdflasfd las', 'Medium', '2025-05-22 05:30:00'),
(12, 'this is updated task by admin', 'pending', '2025-05-18 20:13:04', '2025-05-19 15:56:18', 6, 'this is updated task description by admin', 'High', NULL),
(21, 'create cash memo 22', 'In-Progress', '2025-05-20 13:02:41', '2025-05-20 18:39:55', 2, 'fasfsdgsdgfsdfg', 'High', '2025-05-23 05:30:00'),
(22, 'aaaa', 'Pending', '2025-05-20 18:45:01', '2025-05-21 15:32:12', 1, 'testing...', 'High', '2025-05-15 05:30:00'),
(23, 'this is new task', 'In-Progress', '2025-05-26 15:44:28', '2025-05-26 15:44:47', 15, 'lasdfjal dasjfs hfgkhsdfk gak akfhks fhas', 'High', '2025-05-30 05:30:00'),
(25, 'as', 'Pending', '2025-06-10 00:06:09', '2025-06-10 00:06:09', 1, 'asdfsdfgsdgf', 'High', '2025-06-28 05:30:00'),
(26, 'as', 'Pending', '2025-06-10 00:06:18', '2025-06-10 00:06:18', 1, 'asdfsdfgsdgf', 'High', '2025-06-28 05:30:00'),
(27, 'werw', 'In-Progress', '2025-06-10 13:20:31', '2025-06-10 13:43:49', 2, 'wrwqere', 'Low', '2025-06-21 05:30:00'),
(28, 'make a program to display current date and time', 'Completed', '2025-06-10 13:20:53', '2025-06-25 13:35:44', 2, 'make a program to display current date and time', 'Low', '2025-06-21 05:30:00'),
(29, 'hsasd', 'Pending', '2025-06-21 14:59:23', '2025-06-21 14:59:23', 8, 'asfasfsdfg', 'High', '2025-06-29 05:30:00'),
(30, 'today i need to prepare report', 'In-Progress', '2025-06-21 17:29:32', '2025-06-21 17:29:58', 8, 'jsadlfj lasfjlas jfdkashdflkahsf khsdkfg hskdfg\nasfjkashfdkashdf khasdjfkh asfd', 'High', '2025-06-26 05:30:00'),
(31, 'Free Fake REST API for Placeholder JSON Data', 'Completed', '2025-06-23 16:49:19', '2025-06-24 20:11:17', 1, 'Free Fake REST API for Placeholder JSON Data', 'High', '2025-06-05 05:30:00'),
(32, 'Free Fake REST API for Placeholder JSON Data', 'Pending', '2025-06-23 16:49:28', '2025-06-23 16:49:28', 1, 'Free Fake REST API for Placeholder JSON Data', 'High', '2025-06-05 05:30:00'),
(33, 'Free Fake REST API for Placeholder JSON Data', 'Pending', '2025-06-23 16:49:31', '2025-06-23 16:49:31', 1, 'Free Fake REST API for Placeholder JSON Data', 'High', '2025-06-05 05:30:00'),
(34, 'Ready-to-Use Resources for Your Projects', 'Completed', '2025-06-23 16:49:57', '2025-06-24 20:11:31', 1, 'Ready-to-Use Resources for Your Projects', 'Low', '2025-06-29 05:30:00'),
(35, 'test', 'Completed', '2025-06-24 19:13:05', '2025-06-24 20:11:36', 8, 'task alsdjfla sjdflas fahfkhaskf', 'Medium', '2025-06-15 05:30:00'),
(36, 'fgsdgsdg', 'Pending', '2025-06-24 22:06:20', '2025-06-24 22:06:20', 8, 'dfhdfhdhff', 'Medium', '2025-06-28 05:30:00'),
(37, 'sgzsffffffffffffff', 'Pending', '2025-06-25 12:35:27', '2025-06-25 12:35:27', 8, 'gggggggggggggggg', 'Low', '2025-07-10 05:30:00'),
(38, 'sgzsffffffffffffff', 'Pending', '2025-06-25 12:57:07', '2025-06-25 12:57:07', 8, 'gggggggggggggggg', 'Low', '2025-07-10 05:30:00'),
(39, 'get MPR signed', 'Pending', '2025-06-25 14:08:41', '2025-06-25 14:08:41', 2, 'asdfa sdgsdfgsdg', 'High', '2025-06-28 05:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` tinyint(1) NOT NULL,
  `profile_img` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `mobile`, `username`, `password`, `roleId`, `profile_img`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'user', 'admin@test.com', '9023476453', 'admin_123', '$2b$10$oCGSkGPtVES0ogmHetaPZ.vuZq0u5pxmQne3gyQ6..0q1WKw3uJwi', 1, 'user_1750669070288.png', '2025-05-16 07:03:13', '2025-06-23 14:27:50'),
(2, 'Rahul', 'Tickoo', 'Rahul.Tickoo@in.ey.com', '9893734530', 'rahul_tickoo', '$2b$10$Q3L3YYLk25qB.z0O1NdPT..0X51qBYO.vNtFhnK.a2EFPotTnx3xe', 2, 'user_1750664308795.jpeg', '2025-05-16 07:35:10', '2025-06-23 13:08:28'),
(3, '', '', '', '', 'test_user', '$2b$10$oCGSkGPtVES0ogmHetaPZ.vuZq0u5pxmQne3gyQ6..0q1WKw3uJwi', 2, NULL, '2025-05-16 07:37:56', '2025-05-16 07:37:56'),
(4, '', '', '', '', 'naman', '$2b$10$Po6aD93ddNm929nsNfla7eWKmnYB8xTNiiy55oHNBT4ilCmcFIMba', 2, NULL, '2025-05-16 07:43:32', '2025-05-16 07:43:32'),
(5, '', '', '', '', 'mohit', '$2b$10$xjfjSbsDB1YTCgIn1Ba.gOwgyhrXFSo02yWlcKzEOAhsHpOfpM0m2', 2, NULL, '2025-05-16 08:41:34', '2025-05-16 08:41:34'),
(6, '', '', '', '', 'divyani123', '$2b$10$6ef/.50RX8Nuwfva8guCn.k.JCskesXdTS211rmc1eAnDEtm6y3By', 2, NULL, '2025-05-18 20:02:06', '2025-05-18 20:02:06'),
(7, '', '', '', '', 'rajpal', '$2b$10$GJqUk8SnJNAvBNWfClqhFOvIorSiQ0asl5vUq4vpFYQYQlA003FJ6', 2, NULL, '2025-05-21 11:42:27', '2025-05-21 11:42:27'),
(8, 'Pawan', 'Dubey', 'pawan.dubey.cpcb@gmail.com', '8323367522', 'pvn123', '$2b$10$2b.XTTpqmXhdm0NFEOuKSOOMRZ5jj4bHXkJf3JVpEFI0wEaBGdSfi', 2, 'user_1750665831171.jpg', '2025-05-22 17:23:52', '2025-06-25 13:09:17'),
(9, '', '', '', '', 'manish', '$2b$10$ajzis4dElL86MCK2TdfM/ut//Chvcm8yfDHGNQG4tRPoYfUiOqEpq', 2, NULL, '2025-05-22 17:27:41', '2025-05-22 17:27:41'),
(10, 'Dilip', 'Tiwari', 'dilip.tiwari@gmail.com', '8923283462', 'dilip123', '$2b$10$DgjifzzYVHqVAsQIw6poReRGSlavrd1xHMdMWgZX8w.DPqC.PbYNe', 2, NULL, '2025-05-22 17:46:04', '2025-05-22 17:46:04'),
(11, 'Rajiv', 'Thakur', 'rajiv.thakur@gmail.com', '22333', 'rajiv', '$2b$10$10yJWMjqj9igN4ktYCScB.9UghmiFWR5vJNtDmuXeG0GzSUQRTI/6', 2, NULL, '2025-05-23 11:09:58', '2025-05-23 11:09:58'),
(12, 'Rahees', 'Khan', 'rahees@gmail.com', '9086867556', 'rahees', '$2b$10$AKDymF.vugEVEdlKyd6eLeNQkYtjNwiZT634NUKrGpbnExM4Qfb9a', 2, NULL, '2025-05-23 11:45:48', '2025-05-23 11:45:48'),
(13, 'sdgsdg', 'sfdghdfh', 'dilip.tiwari23@gmail.com', '8923283334', 'daafsw', '$2b$10$jS9gwOj.V1B4mXAPWsal2eFYXyUWrNBGXM0F/OcZKeUhpopzmQYAW', 2, NULL, '2025-05-23 11:53:53', '2025-05-23 11:53:53'),
(14, 'raghavendra', 'tiwari', 'raghu@gmail.com', '9787867872', 'raghu', '$2b$10$3Oqx3CkWApofS2Hq/6gUeuDIfaRhK3P5NMh2ifJUhT83u9J2V7ugG', 2, NULL, '2025-05-26 12:28:57', '2025-05-26 12:28:57'),
(15, 'Radhika', 'Tiwari', 'radhika.tiwari@gmail.com', '8675875686', 'radhika', '$2b$10$DZp.hZOaM/0kJpVM987d5uTro4aMExv3qM6/7BAyujUT5iP3a9JWm', 2, NULL, '2025-05-26 12:33:55', '2025-05-26 12:33:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chatbot_responses`
--
ALTER TABLE `chatbot_responses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_history`
--
ALTER TABLE `chat_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `chatbot_responses`
--
ALTER TABLE `chatbot_responses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `chat_history`
--
ALTER TABLE `chat_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
