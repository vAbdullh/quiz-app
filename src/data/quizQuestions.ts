export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which transport layer protocol provides reliable, connection-oriented service?",
    options: ["UDP", "TCP", "HTTP", "DNS"],
    correctAnswer: "TCP"
  },
  {
    id: 2,
    question: "What is the primary function of the Application Layer in the TCP/IP model?",
    options: ["Packet delivery", "End-to-end communication", "Physical transmission", "Error correction"],
    correctAnswer: "End-to-end communication"
  },
  {
    id: 3,
    question: "Which protocol is used for email transmission between mail servers?",
    options: ["IMAP", "POP3", "SMTP", "HTTP"],
    correctAnswer: "SMTP"
  },
  {
    id: 4,
    question: "What does DNS stand for?",
    options: ["Dynamic Network Service", "Domain Name System", "Data Network Security", "Digital Network Service"],
    correctAnswer: "Domain Name System"
  },
  {
    id: 5,
    question: "Which protocol is connectionless and provides no guarantees about delivery?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correctAnswer: "UDP"
  },
  {
    id: 6,
    question: "What is the default port number for HTTP?",
    options: ["21", "25", "80", "443"],
    correctAnswer: "80"
  },
  {
    id: 7,
    question: "Which protocol is used to securely transfer web traffic?",
    options: ["TLS", "UDP", "FTP", "SMTP"],
    correctAnswer: "TLS"
  },
  {
    id: 8,
    question: "What is the purpose of a socket in networking?",
    options: ["To physically connect devices", "To provide encryption", "To serve as an endpoint for communication", "To manage DNS records"],
    correctAnswer: "To serve as an endpoint for communication"
  },
  {
    id: 9,
    question: "Which HTTP method is used to retrieve data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: "GET"
  },
  {
    id: 10,
    question: "What is the main advantage of persistent HTTP connections?",
    options: ["Reduced bandwidth usage", "Faster page loading", "Increased security", "Better error handling"],
    correctAnswer: "Faster page loading"
  },
  {
    id: 11,
    question: "Which protocol is used to retrieve emails from a mail server?",
    options: ["SMTP", "IMAP", "POP3", "HTTP"],
    correctAnswer: "IMAP"
  },
  {
    id: 12,
    question: "What is the primary security protocol used to encrypt HTTP traffic?",
    options: ["TLS", "SSL", "HTTPS", "VPN"],
    correctAnswer: "TLS"
  },
  {
    id: 13,
    question: "Which DNS record type maps a hostname to an IP address?",
    options: ["CNAME", "MX", "A", "NS"],
    correctAnswer: "A"
  },
  {
    id: 14,
    question: "What is the main difference between HTTP/1.1 and HTTP/2?",
    options: ["HTTP/2 is connectionless", "HTTP/2 multiplexes requests", "HTTP/2 uses UDP", "HTTP/2 doesn't use TCP"],
    correctAnswer: "HTTP/2 multiplexes requests"
  },
  {
    id: 15,
    question: "Which protocol is used for file transfers?",
    options: ["HTTP", "FTP", "SMTP", "DNS"],
    correctAnswer: "FTP"
  },
  {
    id: 16,
    question: "What is the purpose of cookies in HTTP?",
    options: ["To maintain state between requests", "To encrypt traffic", "To validate server certificates", "To compress data"],
    correctAnswer: "To maintain state between requests"
  },
  {
    id: 17,
    question: "Which protocol operates at the transport layer and provides reliability?",
    options: ["UDP", "TCP", "HTTP", "DNS"],
    correctAnswer: "TCP"
  },
  {
    id: 18,
    question: "What is the main advantage of using UDP over TCP?",
    options: ["Lower latency for real-time applications", "Higher reliability", "Built-in encryption", "Automatic error correction"],
    correctAnswer: "Lower latency for real-time applications"
  },
  {
    id: 19,
    question: "Which protocol is used for domain name resolution?",
    options: ["HTTP", "DNS", "SMTP", "FTP"],
    correctAnswer: "DNS"
  },
  {
    id: 20,
    question: "What is the primary function of a web cache?",
    options: ["To encrypt web traffic", "To store copies of web objects", "To assign IP addresses", "To route network traffic"],
    correctAnswer: "To store copies of web objects"
  },
  {
    id: 21,
    question: "Which HTTP status code indicates a successful request?",
    options: ["200 OK", "301 Moved Permanently", "404 Not Found", "500 Internal Server Error"],
    correctAnswer: "200 OK"
  },
  {
    id: 22,
    question: "What is the purpose of the SMTP protocol?",
    options: ["To retrieve emails from a server", "To transfer emails between servers", "To encrypt email traffic", "To compose email messages"],
    correctAnswer: "To transfer emails between servers"
  },
  {
    id: 23,
    question: "Which DNS record type specifies mail server aliases?",
    options: ["MX", "A", "CNAME", "NS"],
    correctAnswer: "MX"
  },
  {
    id: 24,
    question: "What is the main difference between client-server and P2P architectures?",
    options: ["Client-server uses centralized servers, P2P uses decentralized nodes", "Client-server is connectionless, P2P is connection-oriented", "Client-server uses TCP, P2P uses UDP", "Client-server is used for web traffic, P2P for file sharing"],
    correctAnswer: "Client-server uses centralized servers, P2P uses decentralized nodes"
  },
  {
    id: 25,
    question: "Which HTTP method is used to submit form data to a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "POST"
  },
  {
    id: 26,
    question: "What is the purpose of the DNS root servers?",
    options: ["To store all domain name to IP mappings", "To handle the final resolution of domain names", "To delegate resolution to appropriate TLD servers", "To cache frequently accessed DNS records"],
    correctAnswer: "To delegate resolution to appropriate TLD servers"
  },
  {
    id: 27,
    question: "Which protocol is used for secure email transmission?",
    options: ["SMTP", "IMAP", "POP3", "TLS"],
    correctAnswer: "TLS"
  },
  {
    id: 28,
    question: "What is the main advantage of using HTTP/2 over HTTP/1.1?",
    options: ["Reduced latency through multiplexing", "Increased security", "Better compression", "Simplified header format"],
    correctAnswer: "Reduced latency through multiplexing"
  },
  {
    id: 29,
    question: "Which DNS record type specifies the canonical name for an alias?",
    options: ["CNAME", "A", "MX", "NS"],
    correctAnswer: "CNAME"
  },
  {
    id: 30,
    question: "What is the primary function of the Transport Layer Security (TLS) protocol?",
    options: ["To provide reliable data transfer", "To encrypt application layer data", "To manage network congestion", "To resolve domain names"],
    correctAnswer: "To encrypt application layer data"
  },
  {
    id: 31,
    question: "Which HTTP header is used to specify the resource being requested?",
    options: ["Host", "User-Agent", "Accept", "Content-Type"],
    correctAnswer: "Host"
  },
  {
    id: 32,
    question: "What is the main purpose of the SMTP handshaking process?",
    options: ["To establish a secure connection", "To verify user credentials", "To identify the sending and receiving servers", "To compress the email message"],
    correctAnswer: "To identify the sending and receiving servers"
  },
  {
    id: 33,
    question: "Which DNS query type asks the DNS server to perform the entire name resolution process?",
    options: ["Iterative query", "Recursive query", "Reverse lookup", "Zone transfer"],
    correctAnswer: "Recursive query"
  },
  {
    id: 34,
    question: "What is the main advantage of using persistent HTTP connections?",
    options: ["Reduced number of TCP handshakes", "Increased bandwidth", "Better encryption", "Simplified header format"],
    correctAnswer: "Reduced number of TCP handshakes"
  },
  {
    id: 35,
    question: "Which protocol is used for real-time multimedia streaming?",
    options: ["HTTP", "FTP", "RTP", "SMTP"],
    correctAnswer: "RTP"
  },
  {
    id: 36,
    question: "What is the purpose of the Time-to-Live (TTL) field in DNS records?",
    options: ["To specify how long a record can be cached", "To indicate the expiration date of a domain", "To determine the priority of mail servers", "To specify the type of resource record"],
    correctAnswer: "To specify how long a record can be cached"
  },
  {
    id: 37,
    question: "Which HTTP method is used to upload a file to a server?",
    options: ["PUT", "POST", "GET", "DELETE"],
    correctAnswer: "PUT"
  },
  {
    id: 38,
    question: "What is the main difference between a web cache and a proxy server?",
    options: ["A web cache stores copies of web objects, while a proxy server forwards requests", "A web cache encrypts traffic, while a proxy server doesn't", "A web cache uses UDP, while a proxy server uses TCP", "There is no difference between them"],
    correctAnswer: "A web cache stores copies of web objects, while a proxy server forwards requests"
  },
  {
    id: 39,
    question: "Which protocol is used for secure file transfer?",
    options: ["FTP", "SFTP", "HTTP", "SMTP"],
    correctAnswer: "SFTP"
  },
  {
    id: 40,
    question: "What is the main purpose of the HTTP/2 server push feature?",
    options: ["To encrypt data", "To compress headers", "To send resources to the client before they are requested", "To increase bandwidth"],
    correctAnswer: "To send resources to the client before they are requested"
  },{
id: 41,
question: "What is the primary characteristic of the Internet's structure?",
options: [
"A single centralized network",
"A network of networks",
"A hierarchy of three main networks",
"A collection of independent networks with no interconnection"
],
correctAnswer: "A network of networks"
},
{
id: 42,
question: "Which component is considered part of the network edge?",
options: ["Routers", "Hosts", "Core switches", "Backbone links"],
correctAnswer: "Hosts"
},
{
id: 43,
question: "What is the main function of access networks?",
options: [
"To connect end systems to the network core",
"To route packets between different networks",
"To provide physical media for the Internet core",
"To encrypt data transmitted over the Internet"
],
correctAnswer: "To connect end systems to the network core"
},
{
id: 44,
question: "Which of the following is a type of wired access network?",
options: ["Cable-based access", "Wireless LAN", "4G/5G cellular", "Satellite"],
correctAnswer: "Cable-based access"
},
{
id: 45,
question: "What is a key characteristic of HFC (Hybrid Fiber Coax) networks?",
options: [
"They use fiber optics for the entire connection",
"They provide symmetric upstream and downstream speeds",
"They combine fiber and coaxial cable",
"They are primarily used for enterprise networks"
],
correctAnswer: "They combine fiber and coaxial cable"
},
{
id: 46,
question: "What is the typical transmission rate for modern DSL connections?",
options: [
"24-52 Mbps downstream, 3.5-16 Mbps upstream",
"10-100 Mbps symmetric",
"100 Mbps-1 Gbps downstream, 30-100 Mbps upstream",
"5-10 Mbps downstream, 1-2 Mbps upstream"
],
correctAnswer: "24-52 Mbps downstream, 3.5-16 Mbps upstream"
},
{
id: 47,
question: "Which wireless technology is commonly used in home networks?",
options: ["WiFi", "Bluetooth", "4G LTE", "Satellite"],
correctAnswer: "WiFi"
},
{
id: 48,
question: "What is a key characteristic of packet switching?",
options: [
"Dedicated communication channels between endpoints",
"Data is divided into packets that can take different paths",
"Guaranteed bandwidth for each connection",
"No need for routing decisions"
],
correctAnswer: "Data is divided into packets that can take different paths"
},
{
id: 49,
question: "What is store-and-forward processing in packet switching?",
options: [
"Packets are stored permanently at each router",
"Packets are forwarded before being completely received",
"Entire packet must be received before being transmitted",
"Packets are stored in external storage devices"
],
correctAnswer: "Entire packet must be received before being transmitted"
},
{
id: 50,
question: "What is queueing delay in packet switching?",
options: [
"Time taken to process packet headers",
"Time packets wait in router buffers before transmission",
"Delay caused by signal propagation",
"Delay from data encryption/decryption"
],
correctAnswer: "Time packets wait in router buffers before transmission"
},
{
id: 51,
question: "Which factor contributes to packet loss in routers?",
options: [
"Buffer overflow when arrival rate exceeds transmission capacity",
"Too many routers in the path",
"Using TCP instead of UDP",
"Encryption overhead"
],
correctAnswer: "Buffer overflow when arrival rate exceeds transmission capacity"
},
{
id: 52,
question: "What is the main advantage of packet switching over circuit switching?",
options: [
"Guaranteed bandwidth",
"Resource sharing and efficiency",
"No need for routing",
"Faster signal propagation"
],
correctAnswer: "Resource sharing and efficiency"
},
{
id: 53,
question: "What is the primary security challenge in the Internet?",
options: [
"Original design lacked security considerations",
"Too many different protocols",
"Physical damage to infrastructure",
"High cost of security implementations"
],
correctAnswer: "Original design lacked security considerations"
},
{
id: 54,
question: "Which security measure helps prevent IP spoofing?",
options: [
"Encryption",
"Firewalls",
"Packet filtering based on source address",
"Virtual Private Networks (VPNs)"
],
correctAnswer: "Packet filtering based on source address"
},
{
id: 55,
question: "What is the purpose of the transport layer in the Internet protocol stack?",
options: [
"Physical transmission of bits",
"Routing packets between networks",
"Process-to-process data transfer",
"Defining network interfaces"
],
correctAnswer: "Process-to-process data transfer"
},
{
id: 56,
question: "Which layer in the Internet protocol stack is responsible for routing decisions?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Network"
},
{
id: 57,
question: "What is encapsulation in networking?",
options: [
"Encrypting data at each layer",
"Adding protocol-specific headers at each layer",
"Compressing data before transmission",
"Dividing data into smaller packets"
],
correctAnswer: "Adding protocol-specific headers at each layer"
},
{
id: 58,
question: "Which model is NOT part of the Internet protocol stack?",
options: ["OSI model", "TCP/IP model", "ISO model", "None of the above"],
correctAnswer: "OSI model"
},
{
id: 59,
question: "What was a key development in the early 1990s for the Internet?",
options: [
"ARPAnet decommissioned",
"Commercialization of the Web",
"Invention of TCP/IP",
"First e-mail program"
],
correctAnswer: "Commercialization of the Web"
},
{
id: 60,
question: "Which technology enables software-defined networking (SDN)?",
options: ["5G", "WiFi", "OpenFlow", "DSL"],
correctAnswer: "OpenFlow"
},
{
id: 61,
question: "What is the primary difference between circuit switching and packet switching?",
options: [
"Circuit switching uses packets while packet switching uses circuits",
"Circuit switching provides dedicated resources while packet switching shares resources",
"Packet switching is connection-oriented while circuit switching is connectionless",
"Circuit switching is used only for voice while packet switching is used only for data"
],
correctAnswer: "Circuit switching provides dedicated resources while packet switching shares resources"
},
{
id: 62,
question: "Which layer in the Internet protocol stack deals with physical transmission media?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Link"
},
{
id: 63,
question: "What is the purpose of the physical layer in networking?",
options: [
"Transmit raw bitstream over physical medium",
"Provide logical communication between devices",
"Implement error checking and correction",
"Manage network security protocols"
],
correctAnswer: "Transmit raw bitstream over physical medium"
},
{
id: 64,
question: "Which of the following is a wireless transmission medium?",
options: ["Coaxial cable", "Fiber optics", "Radio waves", "Twisted pair"],
correctAnswer: "Radio waves"
},
{
id: 65,
question: "What is the main advantage of fiber optic cables over copper cables?",
options: [
"Higher bandwidth and longer distance transmission",
"Lower cost",
"Simpler installation",
"Better electrical conductivity"
],
correctAnswer: "Higher bandwidth and longer distance transmission"
},
{
id: 66,
question: "Which layer in the Internet protocol stack is responsible for reliable data transfer?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Transport"
},
{
id: 67,
question: "What is the primary function of the application layer?",
options: [
"Support network applications and their protocols",
"Manage physical connections between devices",
"Route packets between different networks",
"Provide error correction for data transmission"
],
correctAnswer: "Support network applications and their protocols"
},
{
id: 68,
question: "Which protocol is used for reliable data transfer between applications?",
options: ["TCP", "UDP", "IP", "HTTP"],
correctAnswer: "TCP"
},
{
id: 69,
question: "What is the main difference between TCP and UDP?",
options: [
"TCP is connection-oriented while UDP is connectionless",
"TCP uses IP while UDP doesn't",
"TCP is used for web traffic while UDP is used for email",
"TCP operates at the network layer while UDP operates at the transport layer"
],
correctAnswer: "TCP is connection-oriented while UDP is connectionless"
},
{
id: 70,
question: "Which layer in the Internet protocol stack handles IP addressing?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Network"
},
{
id: 71,
question: "What is the purpose of the network layer in the Internet protocol stack?",
options: [
"Physical transmission of bits",
"Routing of datagrams from source to destination",
"Process-to-process data transfer",
"Defining network interfaces"
],
correctAnswer: "Routing of datagrams from source to destination"
},
{
id: 72,
question: "Which protocol operates at the network layer?",
options: ["TCP", "UDP", "IP", "HTTP"],
correctAnswer: "IP"
},
{
id: 73,
question: "What is the main function of the link layer?",
options: [
"Transmit data between neighboring network nodes",
"Manage end-to-end communication",
"Provide encryption for data transmission",
"Allocate IP addresses to devices"
],
correctAnswer: "Transmit data between neighboring network nodes"
},
{
id: 74,
question: "Which of the following is a link layer protocol?",
options: ["HTTP", "TCP", "Ethernet", "IP"],
correctAnswer: "Ethernet"
},
{
id: 75,
question: "What is the purpose of the physical layer in the Internet protocol stack?",
options: [
"Transmit raw bits over physical media",
"Implement routing algorithms",
"Provide application services",
"Manage transport connections"
],
correctAnswer: "Transmit raw bits over physical media"
},
{
id: 76,
question: "Which layer in the Internet protocol stack is closest to the user?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Application"
},
{
id: 77,
question: "What is the main advantage of layering in network design?",
options: [
"Allows different vendors to create compatible systems",
"Simplifies the design and implementation of complex systems",
"Provides physical protection for network components",
"Ensures all networks use the same protocols"
],
correctAnswer: "Simplifies the design and implementation of complex systems"
},
{
id: 78,
question: "Which layer in the Internet protocol stack would handle a browser requesting a web page?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Application"
},
{
id: 79,
question: "What is the primary function of a router in the network core?",
options: [
"Connect multiple devices in a local network",
"Physically transmit bits between devices",
"Forward packets between different networks",
"Encrypt data for secure transmission"
],
correctAnswer: "Forward packets between different networks"
},
{
id: 80,
question: "Which component is part of the network core?",
options: ["Routers", "Hosts", "Web browsers", "Smartphones"],
correctAnswer: "Routers"
},
{
id: 81,
question: "What is the main difference between the Internet protocol stack and the OSI model?",
options: [
"The Internet stack has fewer layers",
"The Internet stack includes security layers",
"The Internet stack is only for wireless communication",
"The Internet stack doesn't include presentation and session layers"
],
correctAnswer: "The Internet stack doesn't include presentation and session layers"
},
{
id: 82,
question: "Which layer in the OSI model handles synchronization and recovery?",
options: ["Session", "Transport", "Presentation", "Application"],
correctAnswer: "Session"
},
{
id: 83,
question: "What is the purpose of the presentation layer in the OSI model?",
options: [
"Data encryption and compression",
"Physical transmission of bits",
"Routing between networks",
"End-to-end data transfer"
],
correctAnswer: "Data encryption and compression"
},
{
id: 84,
question: "Which layer in the OSI model is responsible for establishing, maintaining, and terminating sessions?",
options: ["Session", "Transport", "Presentation", "Application"],
correctAnswer: "Session"
},
{
id: 85,
question: "What is the main advantage of the OSI model?",
options: [
"It is simpler than the Internet protocol stack",
"It provides a more detailed framework for network design",
"It is the only model used in modern networking",
"It doesn't require multiple layers"
],
correctAnswer: "It provides a more detailed framework for network design"
},
{
id: 86,
question: "Which layer in the Internet protocol stack would handle packet fragmentation?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Network"
},
{
id: 87,
question: "What is the primary function of the transport layer?",
options: [
"Physical transmission of bits",
"End-to-end communication between processes",
"Routing packets between networks",
"Defining network interfaces"
],
correctAnswer: "End-to-end communication between processes"
},
{
id: 88,
question: "Which transport layer protocol is used for real-time video streaming?",
options: ["TCP", "UDP", "IP", "HTTP"],
correctAnswer: "UDP"
},
{
id: 89,
question: "What is the main advantage of using UDP for real-time applications?",
options: [
"Lower latency due to lack of overhead",
"Guaranteed delivery of packets",
"Built-in encryption",
"Automatic error correction"
],
correctAnswer: "Lower latency due to lack of overhead"
},
{
id: 90,
question: "Which layer in the Internet protocol stack handles IP addressing and routing?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Network"
},
{
id: 91,
question: "What is the purpose of the link layer in the Internet protocol stack?",
options: [
"Transmit data between neighboring nodes",
"Manage end-to-end communication",
"Provide application services",
"Allocate IP addresses"
],
correctAnswer: "Transmit data between neighboring nodes"
},
{
id: 92,
question: "Which link layer protocol is commonly used in local area networks?",
options: ["Ethernet", "TCP", "IP", "HTTP"],
correctAnswer: "Ethernet"
},
{
id: 93,
question: "What is the main function of the physical layer?",
options: [
"Transmit raw bits over physical media",
"Implement routing algorithms",
"Provide application services",
"Manage transport connections"
],
correctAnswer: "Transmit raw bits over physical media"
},
{
id: 94,
question: "Which physical layer technology uses twisted pair cables?",
options: ["Ethernet", "Fiber optics", "WiFi", "Bluetooth"],
correctAnswer: "Ethernet"
},
{
id: 95,
question: "What is the main advantage of twisted pair cables?",
options: [
"High bandwidth for long-distance transmission",
"Resistance to electromagnetic interference",
"Low cost and ease of installation",
"Wireless transmission capabilities"
],
correctAnswer: "Low cost and ease of installation"
},
{
id: 96,
question: "Which physical layer technology is used for wireless communication?",
options: ["Ethernet", "Fiber optics", "Radio waves", "Twisted pair"],
correctAnswer: "Radio waves"
},
{
id: 97,
question: "What is the main challenge in wireless communication?",
options: [
"Signal interference and attenuation",
"High installation costs",
"Limited bandwidth compared to wired connections",
"Complex routing requirements"
],
correctAnswer: "Signal interference and attenuation"
},
{
id: 98,
question: "Which layer in the Internet protocol stack would handle a file transfer protocol?",
options: ["Application", "Transport", "Network", "Link"],
correctAnswer: "Application"
},
{
id: 99,
question: "What is the primary function of the application layer?",
options: [
"Support network applications and their protocols",
"Manage physical connections between devices",
"Route packets between different networks",
"Provide error correction for data transmission"
],
correctAnswer: "Support network applications and their protocols"
},
{
id: 100,
question: "Which application layer protocol is used for file transfers?",
options: ["HTTP", "FTP", "SMTP", "DNS"],
correctAnswer: "FTP"
}
];
