using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmailTemplatesWebAPIService.Model
{
    public class EmailTemplateModel
    {
        public string EmailLabel { get; set; }
        public string FromAddress { get; set; }
        public string DateUpdated { get; set; }
    }

    public class EmailTemplatVieweModel
    {
        public List<EmailTemplateModel> EmailTemplateModels { get; set; }
        public int ItemsTotalCount { get; set; }
        public int ItemsPageSz { get; set; }
    }
}