# Notes

What if everything would be scalable, by making everything a class!


```
cv {
  Class ()
  instances [
    cv_instance1 {
      components [
        nb {
          Class ()
          instances [
            nb_instance1 {
              components [
                cpu {
                  Class ()
                  instances [
                    cpu_instance1 {
                      components [
                        core {
                          Class ()
                          instances [
                            core_instance_1 {
                              components [
                                clock {
                                  Class ()
                                  instances [
                                    clock_instance1 {}
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            } 
          ]
        }
      ]
    }
  ]

}
```


Device (instances) will be using an event driven API. Other devices (instances) can listen for events. But will allow for loose coupling.