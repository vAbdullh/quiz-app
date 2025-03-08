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
  }
];
