# -*- coding: utf-8 -*-

from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool


class SeoApp(CMSApp):
    name = 'SeoCheck'
    urls = ['seo_check.urls', ]
    app_name = 'seo_check'

apphook_pool.register(SeoApp)
