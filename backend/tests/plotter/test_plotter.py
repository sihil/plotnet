from app.plotter.controller import PlotterController

def test_plotter_controller_init():
    controller = PlotterController("/dev/ttyUSB0")
    assert controller.port == "/dev/ttyUSB0"
    assert controller.status["status"] == "idle"

def test_plotter_controller_queue():
    controller = PlotterController("/dev/ttyUSB0")
    controller.send_gcode("G1 X100 Y100")
    assert controller.command_queue.qsize() == 1 