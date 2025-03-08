export interface QuizQuestion {
id: number;
question: string;
options: string[];
correctAnswer: string;
}
export const quizQuestions: QuizQuestion[] = [
{
id: 1,
question: "What is the Internet described as in the context of networking?",
options: ["A single centralized network", "A network of networks", "Only wireless access points", "Only data centers"],
correctAnswer: "A network of networks"
},
{
id: 2,
question: "What is a protocol in computer networking?",
options: ["A physical connection between devices", "A set of rules governing communication between devices", "A type of network cable", "A security encryption standard"],
correctAnswer: "A set of rules governing communication between devices"
},
{
id: 3,
question: "Which of the following is considered part of the network edge?",
options: ["Routers", "Servers in data centers", "Tier-1 ISPs", "Content provider networks"],
correctAnswer: "Servers in data centers"
},
{
id: 4,
question: "What is a key advantage of packet switching over circuit switching?",
options: ["Guaranteed bandwidth", "No resource sharing", "Dynamic resource allocation", "Simpler implementation"],
correctAnswer: "Dynamic resource allocation"
},
{
id: 5,
question: "Which metric measures the time a packet takes to travel from source to destination?",
options: ["Throughput", "Delay", "Loss", "Bandwidth"],
correctAnswer: "Delay"
},
{
id: 6,
question: "What is a primary security concern in computer networks?",
options: ["Packet interception", "Hardware failure", "Software bugs", "User training"],
correctAnswer: "Packet interception"
},
{
id: 7,
question: "Which layer is responsible for routing datagrams from source to destination?",
options: ["Application Layer", "Transport Layer", "Network Layer", "Link Layer"],
correctAnswer: "Network Layer"
},
{
id: 8,
question: "When was the TCP/IP protocol suite deployed?",
options: ["1972", "1980", "1983", "1990"],
correctAnswer: "1983"
},
{
id: 9,
question: "What does HTTP stand for?",
options: ["HyperText Transfer Protocol", "High Tech Transmission Protocol", "Hybrid Text Transfer Process", "Host-to-Host Transport Protocol"],
correctAnswer: "HyperText Transfer Protocol"
},
{
id: 10,
question: "Which layer in the Internet protocol stack deals with individual bits transmission?",
options: ["Physical Layer", "Link Layer", "Network Layer", "Transport Layer"],
correctAnswer: "Physical Layer"
},
{
id: 11,
question: "What is the main difference between TCP and UDP?",
options: ["TCP is connection-oriented, UDP is connectionless", "TCP is faster than UDP", "UDP provides reliability, TCP does not", "TCP is used for video streaming"],
correctAnswer: "TCP is connection-oriented, UDP is connectionless"
},
{
id: 12,
question: "Which of the following is a wireless access technology?",
options: ["DSL", "Cable Modem", "WiFi", "Ethernet"],
correctAnswer: "WiFi"
},
{
id: 13,
question: "What is the purpose of a router in a network?",
options: ["To connect multiple computers in a LAN", "To forward packets between different networks", "To provide wireless connectivity", "To encrypt data transmissions"],
correctAnswer: "To forward packets between different networks"
},
{
id: 14,
question: "Which protocol is used for email transmission?",
options: ["HTTP", "SMTP", "FTP", "DNS"],
correctAnswer: "SMTP"
},
{
id: 15,
question: "What does DNS stand for?",
options: ["Digital Network System", "Domain Name System", "Data Network Service", "Distributed Network Security"],
correctAnswer: "Domain Name System"
},
{
id: 16,
question: "Which of the following is a circuit-switched network?",
options: ["The Internet", "Traditional telephone network", "WiFi network", "4G/5G cellular network"],
correctAnswer: "Traditional telephone network"
},
{
id: 17,
question: "What is the main advantage of circuit switching?",
options: ["Guaranteed bandwidth", "No setup required", "More efficient for bursty traffic", "Simpler implementation"],
correctAnswer: "Guaranteed bandwidth"
},
{
id: 18,
question: "Which layer in the OSI model handles encryption?",
options: ["Presentation Layer", "Session Layer", "Transport Layer", "Application Layer"],
correctAnswer: "Presentation Layer"
},
{
id: 19,
question: "What is a MAC address?",
options: ["A network layer address", "A transport layer identifier", "A link layer hardware address", "A physical layer signal identifier"],
correctAnswer: "A link layer hardware address"
},
{
id: 20,
question: "Which protocol operates at the link layer?",
options: ["IP", "TCP", "Ethernet", "HTTP"],
correctAnswer: "Ethernet"
},
{
id: 21,
question: "What is the primary function of the transport layer?",
options: ["Routing packets", "Transmitting bits over physical media", "End-to-end data transfer", "Interpreting data meaning"],
correctAnswer: "End-to-end data transfer"
},
{
id: 22,
question: "Which of the following is a network layer protocol?",
options: ["HTTP", "TCP", "IP", "Ethernet"],
correctAnswer: "IP"
},
{
id: 23,
question: "What is the main disadvantage of packet switching?",
options: ["No resource guarantees", "Complex implementation", "Higher latency", "Requires connection setup"],
correctAnswer: "No resource guarantees"
},
{
id: 24,
question: "Which protocol is used for file transfer?",
options: ["HTTP", "SMTP", "FTP", "DNS"],
correctAnswer: "FTP"
},
{
id: 25,
question: "What does URL stand for?",
options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Routing Label", "Ubiquitous Resource Locator"],
correctAnswer: "Uniform Resource Locator"
},
{
id: 26,
question: "Which layer is responsible for establishing, maintaining, and terminating connections?",
options: ["Session Layer", "Transport Layer", "Network Layer", "Application Layer"],
correctAnswer: "Session Layer"
},
{
id: 27,
question: "What is the purpose of a firewall?",
options: ["To filter incoming and outgoing network traffic", "To encrypt data", "To store network packets", "To connect different network segments"],
correctAnswer: "To filter incoming and outgoing network traffic"
},
{
id: 28,
question: "Which protocol is used for domain name resolution?",
options: ["HTTP", "DNS", "DHCP", "FTP"],
correctAnswer: "DNS"
},
{
id: 29,
question: "What is the main difference between a hub and a switch?",
options: ["A hub operates at layer 1, a switch at layer 2", "A hub is wireless, a switch is wired", "A switch is faster than a hub", "A hub can route between networks"],
correctAnswer: "A hub operates at layer 1, a switch at layer 2"
},
{
id: 30,
question: "Which protocol is used for automatic IP address assignment?",
options: ["DHCP", "DNS", "HTTP", "FTP"],
correctAnswer: "DHCP"
}
];
