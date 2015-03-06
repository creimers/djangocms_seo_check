# -*- coding: utf-8 -*-
from django.views import generic


class SeoCheckView(generic.TemplateView):
    template_name = 'seo_check/_check_modal.html'
    view_url_name = 'seo_check:check_modal'
    context_object_name = 'seo_page'


    def get_context_data(self, **kwargs):
        context = super(SeoCheckView, self).get_context_data(**kwargs)
        context['path'] = self.request.path
        return context
