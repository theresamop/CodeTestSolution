﻿using EmailTemplatesWebAPIService.Model;
using Modules.Business;
using System;
using System.Collections.Generic;
using System.Web;

namespace CodingTest.Interfaces
{
    public interface IEmailTemplateSvc
    {
        List<EmailTemplateModel> GetAllTemplates();
        List<EmailTemplateModel> GetAllTemplatesSorted(string columnSortBy, int pageNum, out int totalCnt);
    }
}