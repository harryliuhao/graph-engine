# -*- coding: utf-8 -*-
"""
Created on Sun Jul 28 21:24:43 2019

@author: Hao
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Jul 28 17:02:10 2019

@author: Hao
"""

import numpy as np
import matplotlib.pyplot as plt
import random as random




def f(t):
    coeff=random.random()
    return np.exp(-t*coeff) * np.cos(2*np.pi*t)

t1 = np.arange(0.0, 5.0, 0.1)
t2 = np.arange(0.0, 5.0, 0.02)

plt.close('all')
#plt.figure(1)
#plt.subplot(211)
for x in range (6):
    plt.plot(t2+random.random(), f(t2), random.randint(1,10))
    plt.ylim(-1,1.5)

plt.show()