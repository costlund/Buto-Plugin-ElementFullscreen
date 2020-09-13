<?php
class PluginElementFullscreen{
  public function widget_embed($data){
    wfPlugin::includeonce('wf/yml');
    $widget = new PluginWfYml(__DIR__.'/widget/embed.yml');
    wfDocument::renderElement($widget->get());
  }
  public function widget_button($data){
    wfPlugin::includeonce('wf/yml');
    $data = new PluginWfArray($data);
    $widget = new PluginWfYml(__DIR__.'/widget/button.yml');
    $widget->setByTag($data->get('data'));
    wfDocument::renderElement($widget->get());
  }
}
