# Notes

What if everything would be scalable, by making everything a class!

```
cv {
  components [
    nb {
      Class ()
      instances [
        nb1 {
          components [
            cpu {
              Class ()
              instances [
                cpu1 {
                  components [
                    core {
                      Class ()
                      instances [
                        core1 {
                          components [
                            clock {
                              Class ()
                              instances [
                                clock1 {}
                                clock2 {}
                              ]
                            }
                          ]
                        },
                        core2 {}
                      ]
                    }
                  ]  
                },
                cpu2 {}
              ]
            }
          ]
        },
        nb2
      ]
    }
  ]
}
```