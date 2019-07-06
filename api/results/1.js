/*
flags: [],
range: ['scanme.nmap.org']
*/
export const data = {
    "item": {
      "scanner": "nmap",
      "args": "nmap --host-timeout=900s -T4 -oX - -p1-1024  scanme.nmap.org",
      "start": "1562363445",
      "startstr": "Sat Jul 06 00:50:45 2019",
      "version": "7.70",
      "xmloutputversion": "1.04"
    },
    "scaninfo": [
      {
        "item": {
          "type": "syn",
          "protocol": "tcp",
          "numservices": "1024",
          "services": "1-1024"
        }
      }
    ],
    "verbose": [
      {
        "item": {
          "level": "0"
        }
      }
    ],
    "debugging": [
      {
        "item": {
          "level": "0"
        }
      }
    ],
    "host": [
      {
        "item": {
          "starttime": "1562363447",
          "endtime": "1562363448"
        },
        "status": [
          {
            "item": {
              "state": "up",
              "reason": "localhost-response",
              "reason_ttl": "0"
            }
          }
        ],
        "address": [
          {
            "item": {
              "addr": "169.254.192.201",
              "addrtype": "ipv4"
            }
          }
        ],
        "hostnames": [
          "\r\n"
        ],
        "ports": [
          {
            "extraports": [
              {
                "item": {
                  "state": "closed",
                  "count": "1020"
                },
                "extrareasons": [
                  {
                    "item": {
                      "reason": "resets",
                      "count": "1020"
                    }
                  }
                ]
              }
            ],
            "port": [
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "135"
                },
                "state": [
                  {
                    "item": {
                      "state": "open",
                      "reason": "syn-ack",
                      "reason_ttl": "128"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "msrpc",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              },
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "137"
                },
                "state": [
                  {
                    "item": {
                      "state": "filtered",
                      "reason": "no-response",
                      "reason_ttl": "0"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "netbios-ns",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              },
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "139"
                },
                "state": [
                  {
                    "item": {
                      "state": "open",
                      "reason": "syn-ack",
                      "reason_ttl": "128"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "netbios-ssn",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              },
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "445"
                },
                "state": [
                  {
                    "item": {
                      "state": "open",
                      "reason": "syn-ack",
                      "reason_ttl": "128"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "microsoft-ds",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "times": [
          {
            "item": {
              "srtt": "411",
              "rttvar": "618",
              "to": "100000"
            }
          }
        ]
      },
      {
        "item": {
          "starttime": "1562363446",
          "endtime": "1562363452"
        },
        "status": [
          {
            "item": {
              "state": "up",
              "reason": "echo-reply",
              "reason_ttl": "45"
            }
          }
        ],
        "address": [
          {
            "item": {
              "addr": "45.33.32.156",
              "addrtype": "ipv4"
            }
          }
        ],
        "hostnames": [
          {
            "hostname": [
              {
                "item": {
                  "name": "scanme.nmap.org",
                  "type": "user"
                }
              },
              {
                "item": {
                  "name": "scanme.nmap.org",
                  "type": "PTR"
                }
              }
            ]
          }
        ],
        "ports": [
          {
            "extraports": [
              {
                "item": {
                  "state": "closed",
                  "count": "1022"
                },
                "extrareasons": [
                  {
                    "item": {
                      "reason": "resets",
                      "count": "1022"
                    }
                  }
                ]
              }
            ],
            "port": [
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "22"
                },
                "state": [
                  {
                    "item": {
                      "state": "open",
                      "reason": "syn-ack",
                      "reason_ttl": "45"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "ssh",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              },
              {
                "item": {
                  "protocol": "tcp",
                  "portid": "80"
                },
                "state": [
                  {
                    "item": {
                      "state": "open",
                      "reason": "syn-ack",
                      "reason_ttl": "46"
                    }
                  }
                ],
                "service": [
                  {
                    "item": {
                      "name": "http",
                      "method": "table",
                      "conf": "3"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "times": [
          {
            "item": {
              "srtt": "204352",
              "rttvar": "3206",
              "to": "217176"
            }
          }
        ]
      }
    ],
    "runstats": [
      {
        "finished": [
          {
            "item": {
              "time": "1562363452",
              "timestr": "Sat Jul 06 00:50:52 2019",
              "elapsed": "7.31",
              "summary": "Nmap done at Sat Jul 06 00:50:52 2019; 2 IP addresses (2 hosts up) scanned in 7.31 seconds",
              "exit": "success"
            }
          }
        ],
        "hosts": [
          {
            "item": {
              "up": "2",
              "down": "0",
              "total": "2"
            }
          }
        ]
      }
    ]
  }